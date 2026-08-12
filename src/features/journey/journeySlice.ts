import { createListFeatureSlice } from "@/store/createListFeatureSlice";
import type { JourneyMilestone } from "@/types";

export const journeySlice = createListFeatureSlice<JourneyMilestone>("journey");
export const journeyActions = journeySlice.actions;
export default journeySlice.reducer;
