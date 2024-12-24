import axios from 'axios'

const movieBaseUrl = "https://api.themoviedb.org/3"
const api_key = "b6acc493fce97972767d4b86f321f4ec"

 //https://api.themoviedb.org/3/trending/all/day?api_key=b6acc493fce97972767d4b86f321f4ec

 const getTrendingVideos = axios.get("https://api.themoviedb.org/3/trending/all/day?api_key=b6acc493fce97972767d4b86f321f4ec")

 export default {getTrendingVideos}