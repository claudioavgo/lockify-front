import axios from "axios";
import { IncomingMessage } from "http";

export type ApiResponse<T> = {
  data: T | null;
  error?: string;
};

const getBaseUrl = () => {
  return process.env.NEXT_PUBLIC_API_URL;
};

export function getApiClient(req?: IncomingMessage) {
  const instance = axios.create({
    baseURL: getBaseUrl(),
    withCredentials: true,
  });

  if (req?.headers?.cookie) {
    instance.defaults.headers.Cookie = req.headers.cookie;
  }

  return instance;
}
