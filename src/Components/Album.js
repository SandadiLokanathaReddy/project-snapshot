import axios from "axios";
import { useState } from "react";
import OurForm from "./OurForm";
import PhotoAlbum from "react-photo-album";
import photos from "./photos.js";

const Album = () => {
	const [images, setImages] = useState(photos);
	const [keyword, setKeyword] = useState("");

	const formSubmit = (e) => {
		e.preventDefault();
		getImagesData(keyword);
		setKeyword("");
	};

	const getPhotos = (imagesData) => {
		const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];
		const unsplashLink = (id, width, height) =>
			`https://source.unsplash.com/${id}/${width}x${height}`;

		const newImages = imagesData.map((photo) => ({
			src: unsplashLink(photo.id, photo.width, photo.height),
			width: photo.width,
			height: photo.height,
			images: breakpoints.map((breakpoint) => {
				const height = Math.round(
					(photo.height / photo.width) * breakpoint
				);
				return {
					src: unsplashLink(photo.id, breakpoint, height),
					width: breakpoint,
					height,
				};
			}),
		}));
		setImages(newImages);
	};

	const getImagesData = async (searchword) => {
		var imagesData = []; // it stores all images data
		for (var p = 1; p <= 4; p++) {
			// it fetches 30*p number of images in total
			await axios
				.get(
					`https://api.unsplash.com/search/photos?page=${p}&per_page=30&query=${searchword}&client_id=DcatpZ9T66kFddYG90iGQQ_2EnwEWQBX83oklAEL6rQ`
				)
				// eslint-disable-next-line no-loop-func
				.then((response) => {
					imagesData = imagesData.concat(response.data.results);
				})
				.catch((err) => {
					console.log("Error happened while fetching images data");
				});
		}
		getPhotos(imagesData);
	};

	return (
		<>
			<OurForm
				formSubmit={formSubmit}
				keyword={keyword}
				setKeyword={setKeyword}
			/>
			<div className="grid-container">
				<PhotoAlbum layout="masonry" photos={images} padding={0} />
			</div>
		</>
	);
};

export default Album;
