import { LogInDto } from "@/types/logInDto.type";
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

export const logIn = async (logInDto: LogInDto) => {
  return await client.post("/auth/log-in", logInDto);
};

export const logOut = async () => {
  return await client.delete("/auth/log-out");
};

export const refresh = async () => {
  return await client
    .get("/auth/refresh-token")
    .then((result) => result.data.result);
};
