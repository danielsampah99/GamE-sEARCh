import axios from "axios";

export default axios.create({
	baseURL: "https://api.rawg.io/api",
	params: {
		key: "6e1bec86c4bf4eb393b8b2a944b933d3",
	},
});
