import axios from "axios"

const instance = axios.create({
    baseURL: "https://movie-task.vercel.app/api/popular?page=1"
})

export default instance;