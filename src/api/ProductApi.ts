import axios from "axios";
import {GetAllProductDto, ProductDetailDto} from "../data/product.type";

const baseUrl = "http://localhost:8080";

export async function getAllProduct() {
  try {
    const response = await axios.get<GetAllProductDto[]>(`${baseUrl}/public/products`);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
}

export async function getProductByPid(pid: string) {
  try {
    const response = await axios.get<ProductDetailDto>(`${baseUrl}/public/products/${pid}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching product detail:", error);
    throw error;
  }
}
