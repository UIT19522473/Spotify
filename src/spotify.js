import axios from "axios";

const authEndpoint = "https://accounts.spotify.com/authorize?";
const clientId = "5c4f06cae62746d0bcf6f2cb0d157585";
const redirecURL = process.env.REACT_APP_URL_CLIENT;
const scopes = ["user-library-read", "playlist-read-private"];

export const loginEndpoint = `${authEndpoint}client_id=${clientId}&redirect_uri=${redirecURL}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;

const apiClient = axios.create({
  baseURL: "https://api.spotify.com/v1/",
});
export const setClientToken = (token) => {
  apiClient.interceptors.request.use(async function (config) {
    config.headers.Authorization = "Bearer " + token;
    return config;
  });
};

export default apiClient;
