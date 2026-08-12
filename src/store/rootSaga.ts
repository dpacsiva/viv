import { all, fork } from "redux-saga/effects";
import { archiveSaga } from "@/features/archive/archiveSaga";
import { lyricsSaga } from "@/features/lyrics/lyricsSaga";
import { filmsSaga } from "@/features/films/filmsSaga";
import { themesSaga } from "@/features/themes/themesSaga";
import { wordsSaga } from "@/features/words/wordsSaga";
import { journeySaga } from "@/features/journey/journeySaga";
import { collaborationsSaga } from "@/features/collaborations/collaborationsSaga";
import { journalSaga } from "@/features/journal/journalSaga";
import { awardsSaga } from "@/features/awards/awardsSaga";
import { searchSaga } from "@/features/search/searchSaga";

export function* rootSaga() {
  yield all([
    fork(archiveSaga),
    fork(lyricsSaga),
    fork(filmsSaga),
    fork(themesSaga),
    fork(wordsSaga),
    fork(journeySaga),
    fork(collaborationsSaga),
    fork(journalSaga),
    fork(awardsSaga),
    fork(searchSaga),
  ]);
}
