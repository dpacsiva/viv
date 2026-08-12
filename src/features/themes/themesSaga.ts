import { createListFeatureSaga } from "@/store/createListFeatureSaga";
import { themesActions } from "./themesSlice";
import { fetchThemesList, fetchThemeBySlug } from "./themesApi";

export const themesSaga = createListFeatureSaga({
  actions: themesActions,
  fetchList: fetchThemesList,
  fetchDetail: fetchThemeBySlug,
});
