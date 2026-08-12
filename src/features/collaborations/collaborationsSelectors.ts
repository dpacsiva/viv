import type { RootState } from "@/store";

export const selectCollaboratorsItems = (state: RootState) => state.collaborations.items;
export const selectCollaboratorsStatus = (state: RootState) => state.collaborations.status;
export const selectCollaboratorsError = (state: RootState) => state.collaborations.error;
export const selectCurrentCollaborator = (state: RootState) => state.collaborations.current;
export const selectCollaboratorDetailStatus = (state: RootState) => state.collaborations.detailStatus;
export const selectCollaboratorDetailError = (state: RootState) => state.collaborations.detailError;
