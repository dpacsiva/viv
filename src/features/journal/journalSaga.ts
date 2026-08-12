import { createListFeatureSaga } from "@/store/createListFeatureSaga";
import { journalActions } from "./journalSlice";
import { fetchJournalList, fetchJournalBySlug } from "./journalApi";

export const journalSaga = createListFeatureSaga({
  actions: journalActions,
  fetchList: fetchJournalList,
  fetchDetail: fetchJournalBySlug,
});
