import { createListFeatureSaga } from "@/store/createListFeatureSaga";
import { journeyActions } from "./journeySlice";
import { fetchJourneyList } from "./journeyApi";

export const journeySaga = createListFeatureSaga({
  actions: journeyActions,
  fetchList: fetchJourneyList,
});
