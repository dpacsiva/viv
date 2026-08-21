import type { ID } from "./common";

export interface Quote {
  id: ID;
  quote: string;
  attribution: string;
  context?: string;
  language?: "ta" | "en";
}
