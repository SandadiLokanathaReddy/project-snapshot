import "./App.css";
import NavScroll from "./Components/NavScroll";
import GridContainer from "./Components/GridContainer";
import { useState } from "react";

function App() {

	
	const [keyword, setKeyword] = useState("")
	const [searchword, setSearchword] = useState("nature")

	const formChange = (e) => {
		setKeyword(e.target.value)
	}
 
	const formSubmit = (e) => {
		e.preventDefault();
		setSearchword(keyword)
	}
	return (
		<div className="App">
			<NavScroll />
			<div className="heading-container">
				<h1 className="heading">	All Snaps</h1>
				<form className="search-form" onSubmit={e => formSubmit(e)}>
					<label htmlFor="search-box" className="form-label">Search using keyword</label>
					<input id="search-box" type="text" placeholder="search..." className="form-control" onChange={e => formChange(e)} value={keyword} />
					<button type="submit" className="btn btn-primary">Search</button> 
				</form>
			</div>
			<div className="grid-container">
				<GridContainer searchword={searchword}/>
			</div>
		</div>
	);
}

export default App;
