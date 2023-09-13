import { BookState, BookAction, BookActionTypes } from "../../types/Book";

const initialState: BookState = {
  Books: [],
  error: null,
  maxResults: 30,
  startIndex: 0,
  loading: false,
  orderBy: "relevance",
  StandartBooks: [],
  category: "",
  TotalBooks: 0,
};

export const BookReducer = (
  state = initialState,
  action: BookAction
): BookState => {
  switch (action.type) {
    case BookActionTypes.FETCH_BOOKS:
      return { ...state, loading: true };
    case BookActionTypes.FETCH_BOOKS_SUCCESS:
      return {
        ...state,
        loading: false,
        Books: action.payload,
        StandartBooks: action.StandartBooks,
        TotalBooks: action.TotalBooks,
      };
    case BookActionTypes.FETCH_MORE_BOOKS:
      return {
        ...state,
        loading: false,
        Books: [...state.StandartBooks.items, action.payload],
      };
    case BookActionTypes.FETCH_BOOKS_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
