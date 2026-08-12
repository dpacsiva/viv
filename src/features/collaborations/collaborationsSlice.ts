import { createListFeatureSlice } from "@/store/createListFeatureSlice";
import type { Collaborator } from "@/types";

export const collaborationsSlice = createListFeatureSlice<Collaborator>("collaborations");
export const collaborationsActions = collaborationsSlice.actions;
export default collaborationsSlice.reducer;
