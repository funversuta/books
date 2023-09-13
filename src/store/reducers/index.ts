import { combineReducers } from "redux";
import { BookReducer } from "./BookReducer";

export const rootReducer = combineReducers({
  book: BookReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
