import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api/',
    params: {
        key: 'a32da348bbbd4591987cc44c41a89c17'
    }
})
