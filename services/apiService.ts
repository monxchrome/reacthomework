import axios from "axios";

const apiService = axios.create({baseURL:'https://api.spacexdata.com/v3'});

export {
    apiService
}