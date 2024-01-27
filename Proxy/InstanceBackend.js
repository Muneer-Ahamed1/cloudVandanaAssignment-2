import axios from "axios";

const instanceBackend=axios.create({
    baseURL:'https://assignment-3-woad.vercel.app/',
    withCredentials:true
})

export default instanceBackend;