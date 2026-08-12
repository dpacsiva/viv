import { createListFeatureSlice } from "@/store/createListFeatureSlice";
import type { Award } from "@/types";

export const awardsSlice = createListFeatureSlice<Award>("awards");
export const awardsActions = awardsSlice.actions;
export default awardsSlice.reducer;
