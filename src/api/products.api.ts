import { Product } from "@/types/product.type";
import axios from "axios";

const client = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  withCredentials: true,
  timeout: 30_000,
});

export const getProducts = async (): Promise<Product[]> => {
  const products = await client
    .get(`/products`)
    .then((result) => result.data.result);

  console.log(products);

  return products;
};
