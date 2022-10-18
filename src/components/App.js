import React from "react";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogHome from "./HogHome";

function App() {
	// console.log(hogs)

	
	return (
		<div className="App">
			<Nav />
			<HogHome hogs={hogs}/> 
		</div>
	)
}

export default App;
