import axios from 'axios'

    axios.defaults.baseURL = "http://192.168.2.228:9000"

export default {
    get: axios.get,
    post: axios.post
}