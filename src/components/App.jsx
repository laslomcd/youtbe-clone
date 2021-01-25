import React from "react";
import SearchBar from "./SearchBar/SearchBar";
import VideoList from "./VideoList/VideoList";
import youtube from "../api/youtube";

class App extends React.Component {
	state = {
		videos: [],
	};

	onSearchSubmit = async (term) => {
		const response = await youtube.get("/search", {
			params: { q: term },
		});
		this.setState({ videos: response.data.items });
	};

	render() {
		return (
			<div className="ui container" style={{ marginTop: "10px" }}>
				<SearchBar onSubmit={this.onSearchSubmit} />
				<VideoList videos={this.state.videos} />
			</div>
		);
	}
}

export default App;
