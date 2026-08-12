import { createListFeatureSlice } from "@/store/createListFeatureSlice";
import type { Film } from "@/types";

export const filmsSlice = createListFeatureSlice<Film>("films");
export const filmsActions = filmsSlice.actions;
export default filmsSlice.reducer;
