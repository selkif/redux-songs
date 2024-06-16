import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import songReducer from "../redux/songSlice";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    songs: songReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: false, // Disable the default thunk middleware
      serializableCheck: false, // Disable the default serializableCheck middleware
    }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
