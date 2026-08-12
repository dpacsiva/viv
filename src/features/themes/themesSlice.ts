import { createListFeatureSlice } from "@/store/createListFeatureSlice";
import type { Theme } from "@/types";

export const themesSlice = createListFeatureSlice<Theme>("themes");
export const themesActions = themesSlice.actions;
export default themesSlice.reducer;
