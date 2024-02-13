import { SignUpDto } from "@/types/signUpDto.type";
import axios from "axios";

const client = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  withCredentials: true,
  timeout: 30_000,
});

export const signUp = async (signUpForm: SignUpDto) => {
  return await client.post("/auth/sign-up", signUpForm);
};
