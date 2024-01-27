import axios from "axios";

const instanceBackend=axios.create({
    baseURL:'https://assignment-3-sooty.vercel.app/',
})

export default instanceBackend;