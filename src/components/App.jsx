import React from "react";
import SearchBar from "./SearchBar";

class App extends React.Component {
	state = {
		videos: [],
		test: "",
	};

	getTestData = (term) => {
		console.log(term);
	};

	render() {
		return (
			<div className="ui container" style={{ marginTop: "10px" }}>
				<SearchBar onSubmit={this.getTestData} />
			</div>
		);
	}
}

export default App;
