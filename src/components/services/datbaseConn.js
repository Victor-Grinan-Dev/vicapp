
import axios from "../api/axios";

export const getDatabase = async () => {
    const response = await axios.get("/database");
    return response.data;
}

export const getData1 = async () => {
    const response = await axios.get("/database");
    return response.data.data1;
}

export const getData2 = async () => {
    const response = await axios.get("/database");
    return response.data.data2;
}