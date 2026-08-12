import axios, { AxiosError, type InternalAxiosRequestConfig } from "axios";
import type { ApiError } from "@/types";
import { registerMockHandlers } from "./mock/mockServer";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "mock://vivek-archive";
const REQUEST_TIMEOUT_MS = 15000;
const USING_MOCK_BACKEND = !process.env.NEXT_PUBLIC_API_BASE_URL;

export const axiosClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: REQUEST_TIMEOUT_MS,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosClient.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  if (typeof window !== "undefined") {
    const token = window.localStorage.getItem("vivek_archive_auth_token");
    if (token) {
      config.headers.set("Authorization", `Bearer ${token}`);
    }
  }
  return config;
});

axiosClient.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    const normalised: ApiError = {
      message:
        (error.response?.data as { message?: string } | undefined)?.message ||
        error.message ||
        "Something went wrong while reaching the archive. Please try again.",
      code: error.code,
      status: error.response?.status,
    };
    return Promise.reject(normalised);
  }
);

// This is the only line to remove when a real backend is ready — every
// feature API file below keeps talking to `axiosClient` unchanged.
if (USING_MOCK_BACKEND) {
  registerMockHandlers(axiosClient);
}

export function createCancelToken() {
  return new AbortController();
}
