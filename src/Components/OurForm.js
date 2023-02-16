import React from "react";

const OurForm = (props) => {
	const { formSubmit, keyword, setKeyword } = props;
	return (
		<div className="form-container">
			<form className="search-form" onSubmit={(e) => formSubmit(e)}>
				<label htmlFor="search-box" className="form-label">
					Search using keyword
					<input
						id="search-box"
						type="text"
						placeholder="search..."
						className="form-control"
						onChange={(e) => setKeyword(e.target.value)}
						value={keyword}
					/>
				</label>

				<button type="submit" className="btn btn-primary">
					Search
				</button>
			</form>
		</div>
	);
};

export default OurForm;
