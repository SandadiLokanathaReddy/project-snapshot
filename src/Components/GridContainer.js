import Row from "react-bootstrap/Row";
import axios from "axios";
import { useState } from "react";
//import { useEffect } from "react";
//import OurCard from "./OurCard";
import OurForm from "./OurForm";
import ImageCard from "./ImageCard";

const GridContainer = (props) => {
	const [images, setImages] = useState([]);
	const [keyword, setKeyword] = useState("");
	// const [searchword, setSearchword] = useState("all");

	const formSubmit = (e) => {
		e.preventDefault();
		getImagesData(keyword);
		// setSearchword(keyword);
		setKeyword("");
	};

	const getImagesData = (searchword) => {
		axios
			.get(
				`https://api.unsplash.com/search/photos?page=1&per_page=20&query=${searchword}&client_id=DcatpZ9T66kFddYG90iGQQ_2EnwEWQBX83oklAEL6rQ`
			)
			.then((response) => {
				setImages(response.data.results);
			})
			.catch((err) => {
				console.log("Error happened while fetching images data");
			});
	};

	// useEffect(() => {
	// 	axios
	// 		.get(
	// 			`https://api.unsplash.com/search/photos?page=1&query=${searchword}&orientation=squarish&client_id=DcatpZ9T66kFddYG90iGQQ_2EnwEWQBX83oklAEL6rQ`
	// 		)
	// 		.then((response) => {
	// 			setImages(response.data.results);
	// 		})
	// 		.catch((err) => {
	// 			console.log("Error happened while fetching images data");
	// 		});
	// }, [searchword]);

	return (
		<>
			<OurForm
				formSubmit={formSubmit}
				keyword={keyword}
				setKeyword={setKeyword}
			/>
			<div className="grid-container">
				<Row xs={1} md={4} className="g-4">
					{images.length === 0 ? (
						<h2>Loading.....</h2>
					) : (
						images.map((val, idx) => {
							return <ImageCard key={idx} imageItem={val} />;
						})
					)}
				</Row>
			</div>
		</>
	);
};

export default GridContainer;
