import { createListFeatureSaga } from "@/store/createListFeatureSaga";
import { wordsActions } from "./wordsSlice";
import { fetchWordsList, fetchWordBySlug } from "./wordsApi";

export const wordsSaga = createListFeatureSaga({
  actions: wordsActions,
  fetchList: fetchWordsList,
  fetchDetail: fetchWordBySlug,
});
