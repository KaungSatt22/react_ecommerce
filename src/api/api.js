import axios from "axios";

export const getAllProducts = async () => {
  const res = await axios.get("https://dummyjson.com/products");
  return res.data.products;
};

export const getSingleDetail = async (id) => {
  const res = await axios.get(`https://dummyjson.com/products/${id}`);
  return res.data;
};
