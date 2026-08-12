import type { RootState } from "@/store";

export const selectAwardsItems = (state: RootState) => state.awards.items;
export const selectAwardsStatus = (state: RootState) => state.awards.status;
export const selectAwardsError = (state: RootState) => state.awards.error;
