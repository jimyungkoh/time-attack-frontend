import { Brand } from "@/types/brand.type";
import axios from "axios";

const client = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  withCredentials: true,
  timeout: 30_000,
});

export const getBrands = async (): Promise<Brand[]> => {
  const brands = await client
    .get(`/brands`)
    .then((result) => result.data.result);

  return brands;
};
