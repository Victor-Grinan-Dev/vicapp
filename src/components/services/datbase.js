
import axios from "../../api/axios";

export const getDatabase = async () => {
    const response = await axios.get("/database");
    return response.data;
}

export const getDataStr = async () => {
    const response = await axios.get("/database");
    return response.data.dataStr;
}

export const getDataArr = async () => {
    const response = await axios.get("/database");
    return response.data.dataArr;
}

export const getDataObj = async () => {
    const response = await axios.get("/database");
    return response.data.dataObj;
}
