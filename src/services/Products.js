import axios from "axios";

const API_URL = "http://fakestoreapi.com/products";

export const getProducts = async () => {
    const { data } = await axios.get(API_URL);
    return data;
}

export const getProductsByCategory = async (category) => {
    const { data } = await axios.get(`${API_URL}/category/${category}`);
    return data;
}


