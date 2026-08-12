import { createListFeatureSaga } from "@/store/createListFeatureSaga";
import { collaborationsActions } from "./collaborationsSlice";
import { fetchCollaboratorsList, fetchCollaboratorBySlug } from "./collaborationsApi";

export const collaborationsSaga = createListFeatureSaga({
  actions: collaborationsActions,
  fetchList: fetchCollaboratorsList,
  fetchDetail: fetchCollaboratorBySlug,
});
