import { Product } from "@/types/product.type";
import axios from "axios";

const client = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  withCredentials: true,
  timeout: 30_000,
});

export const getProducts = async (
  brandId: string | null
): Promise<Product[]> => {
  const products = await client
    .get(!brandId ? `/products` : `/brands/${brandId}`)
    .then((result) => result.data.result)
    .then((products) => (!brandId ? products : products.products));

  return products;
};
