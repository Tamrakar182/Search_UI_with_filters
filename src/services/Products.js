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

export const getProductsBySearch = async (search) => {
    const { data } = await axios.get(`${API_URL}/search?q=${search}`);
    return data;
}

export const getProductsByCategoryAndSearch = async (category, search) => {
    const { data } = await axios.get(`${API_URL}/category/${category}?q=${search}`);
    return data;
}


