import "./App.css";
import NavScroll from "./Components/NavScroll";
// import GridContainer from "./Components/GridContainer";
import Album from "./Components/Album";

function App() {
	return (
		<div className="App">
			<NavScroll />
			<div className="heading-container">
				<h1 className="heading"> All Snaps</h1>
			</div>
			{/* <GridContainer /> */}
			<Album />
		</div>
	);
}

export default App;
