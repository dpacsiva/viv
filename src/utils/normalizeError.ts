import type { ApiError } from "@/types";

export function normalizeError(error: unknown): ApiError {
  if (typeof error === "object" && error !== null && "message" in error) {
    return error as ApiError;
  }
  return { message: "Something went wrong while reaching the archive. Please try again." };
}
