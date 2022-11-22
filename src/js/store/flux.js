const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			vehicles: [],

		},
		actions: {
			// get request for people
			getPeople: () => {
				
				fetch('https://swapi.dev/api/people/')
				.then(data => data.json())
				.then(res => setStore({people: res.results}))
			}
		}
	};
};

export default getState;
