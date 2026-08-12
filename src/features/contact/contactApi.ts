import { axiosClient } from "@/services/axiosClient";
import { apiRoutes } from "@/services/apiRoutes";

export interface ContactFormPayload {
  name: string;
  email: string;
  message: string;
}

export interface ContactFormResponse {
  success: boolean;
  message: string;
}

export async function submitContactForm(payload: ContactFormPayload): Promise<ContactFormResponse> {
  const { data } = await axiosClient.post<ContactFormResponse>(apiRoutes.contact.submit(), payload);
  return data;
}
