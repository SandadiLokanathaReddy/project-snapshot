import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import axios from "axios";

function GridContainer(props) {
	let images = []
	const {searchword} = props
	const getImages = async () => {
		await axios.get(`https://api.unsplash.com/search/photos?page=1&query=${searchword}&orientation=squarish&client_id=DcatpZ9T66kFddYG90iGQQ_2EnwEWQBX83oklAEL6rQ`)
		.then((response) => {
			images = response.data.results
			console.log(images)
		})
	}

	getImages()


	return (
		<Row xs={1} md={3} className="g-4">
			{Array.from({ length: 8 }).map((_, idx) => (
				<Col>
					{images.map((val, ind) => {
						return (
							<Card>
								<Card.Img variant="top" src={`val.urls.thumb`} />
								<Card.Body>
									<Card.Title>Card title</Card.Title>
									<Card.Text>
										This is a longer card with supporting text below
										as a natural lead-in to additional content. This
										content is a little bit longer.
									</Card.Text>
								</Card.Body>
							</Card>
						)
					})}
				</Col>
			))}
		</Row>
	);
}

export default GridContainer;
