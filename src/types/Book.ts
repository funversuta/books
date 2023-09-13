export interface BookState {
  Books: any[] | any;
  loading: boolean;
  error: null | string;
  maxResults: number;
  startIndex: number;
  StandartBooks: any[] | any;
  orderBy: string;
  category: string | null;
  TotalBooks: number;
}

export enum BookActionTypes {
  FETCH_BOOKS = "FETCH_BOOKS",
  FETCH_BOOKS_SUCCESS = "FETCH_BOOKS_SUCCESS",
  FETCH_BOOKS_ERROR = "FETCH_BOOKS_ERROR",
  FETCH_MORE_BOOKS = "FETCH_MORE_BOOKS",
}
interface FetchBookAction {
  type: BookActionTypes.FETCH_BOOKS;
}
interface FetchBookSuccessAction {
  type: BookActionTypes.FETCH_BOOKS_SUCCESS;
  payload: any[];
  StandartBooks: any[];
  TotalBooks: number;
}
interface FetchBookErrorAction {
  type: BookActionTypes.FETCH_BOOKS_ERROR;
  payload: string;
}

interface FetchMoreBooks {
  type: BookActionTypes.FETCH_MORE_BOOKS;
  payload: any[];
  StandartBooks: any[];
}

export type BookAction =
  | FetchBookAction
  | FetchBookErrorAction
  | FetchBookSuccessAction
  | FetchMoreBooks;
