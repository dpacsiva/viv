import { createListFeatureSaga } from "@/store/createListFeatureSaga";
import { awardsActions } from "./awardsSlice";
import { fetchAwardsList } from "./awardsApi";

export const awardsSaga = createListFeatureSaga({
  actions: awardsActions,
  fetchList: fetchAwardsList,
});
