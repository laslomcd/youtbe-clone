import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../api/youtube";

class App extends React.Component {
	state = {
		videos: [],
		test: "",
	};

	onSearchSubmit = async (term) => {
		const response = await youtube.get("/search", {
			params: { q: term },
		});
		console.log(response);
	};

	render() {
		return (
			<div className="ui container" style={{ marginTop: "10px" }}>
				<SearchBar onSubmit={this.onSearchSubmit} />
			</div>
		);
	}
}

export default App;
