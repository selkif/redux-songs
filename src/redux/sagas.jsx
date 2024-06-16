import { call, put, takeEvery } from "redux-saga/effects";
import {
  fetchSong,
  fetchsongSuccess,
  fetchsongFailure,
  addSong,
  updateSong,
  deleteSong,
} from "../redux/songSlice";

function* fetchsongsSaga() {
  try {
    const response = yield call(() =>
      fetch("http://localhost:4000/songs").then((res) => res.json())
    );
    yield put(fetchsongSuccess(response));
  } catch (error) {
    yield put(fetchsongFailure(error.message));
  }
}

function* addSongSaga(action) {
  try {
    const response = yield call(() =>
      fetch("http://localhost:4000/songs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(action.payload),
      }).then((res) => res.json())
    );

    // Fetch the updated list of songs from the server
    const updatedSongs = yield call(() =>
      fetch("http://localhost:4000/songs").then((res) => res.json())
    );

    // Dispatch the fetchsongSuccess action with the updated songs
    yield put(fetchsongSuccess(updatedSongs));
  } catch (error) {
    yield put(fetchsongFailure(error.message));
  }
}
function* updateSongSaga(action) {
  try {
    const response = yield call(() =>
      fetch(`http://localhost:4000/songs/${action.payload.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(action.payload),
      }).then((res) => res.json())
    );
    yield put(updateSong(response));
  } catch (error) {
    yield put(fetchsongFailure(error.message));
  }
}

function* deleteSongSaga(action) {
  try {
    yield call(() =>
      fetch(`http://localhost:4000/songs/${action.payload.id}`, {
        method: "DELETE",
      })
    );
    yield put(deleteSong(action.payload));
  } catch (error) {
    yield put(fetchsongFailure(error.message));
  }
}

export default function* rootSaga() {
  yield takeEvery(fetchSong.type, fetchsongsSaga);
  yield takeEvery(addSong.type, addSongSaga);
  yield takeEvery(updateSong.type, updateSongSaga);
  yield takeEvery(deleteSong.type, deleteSongSaga);
}
