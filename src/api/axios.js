import axios from 'axios';

const Auth = axios.create({
  baseURL: 'http://localhost:3005',
});
const Repos = axios.create({
  baseURL: 'https://api.github.com',
});

// axiosApiInstance.interceptors.request.use(
// 	async (config) => {
// 		config.headers = {
// 			token: localStorage.getItem('token'),
// 		};
// 		return config;
// 	},
// 	(error) => {
// 		Promise.reject(error);
// 	}
// );

export { Auth, Repos };
