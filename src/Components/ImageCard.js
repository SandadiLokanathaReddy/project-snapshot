import React from "react";
import { Card, Col } from "react-bootstrap";

const ImageCard = (props) => {
	const { imageItem } = props;
	return (
		<Col>
			<Card>
				<Card.Img
					variant="top"
					src={`${imageItem.urls.regular}`}
					className="image-card"
				/>
			</Card>
		</Col>
	);
};

export default ImageCard;
