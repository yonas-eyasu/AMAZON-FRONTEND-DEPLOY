import axios from "axios"

const axiosInstance=axios.create({
     // local instance of fire base function
// baseURL:"http://127.0.0.1:5001/clone-5d2fc/us-central1/api"
     // deployed verions of amzon server on render.com
baseURL:"https://amazon-api-deploy-1-d41q.onrender.com/"
})
export {axiosInstance}