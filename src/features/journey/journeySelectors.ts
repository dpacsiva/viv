import type { RootState } from "@/store";

export const selectJourneyItems = (state: RootState) => state.journey.items;
export const selectJourneyStatus = (state: RootState) => state.journey.status;
export const selectJourneyError = (state: RootState) => state.journey.error;
