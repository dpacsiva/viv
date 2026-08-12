import { createListFeatureSaga } from "@/store/createListFeatureSaga";
import { filmsActions } from "./filmsSlice";
import { fetchFilmsList, fetchFilmBySlug } from "./filmsApi";

export const filmsSaga = createListFeatureSaga({
  actions: filmsActions,
  fetchList: fetchFilmsList,
  fetchDetail: fetchFilmBySlug,
});
