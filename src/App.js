import "./App.css";
import NavScroll from "./Components/NavScroll";
//import OurCard from "./Components/OurCard";
import GridContainer from "./Components/GridContainer";

function App() {
	return (
		<div className="App">
			<NavScroll />
			<div className="heading-container">
				<h
					style={{
						"font-size": "55px",
						"font-family": "Verdana, sans-serif",
					}}
				>
					All Snaps
				</h>
			</div>
			<div className="grid-container">
				<GridContainer />
			</div>
		</div>
	);
}

export default App;
