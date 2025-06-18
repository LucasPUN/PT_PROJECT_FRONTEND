import axios from "axios";
import { GetAllProductDto } from "../data/product.type";

const baseUrl = "http://localhost:8080";

export async function getAllProduct() {
  try {
    const response = await axios.get<GetAllProductDto[]>(`${baseUrl}/products`);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
}
