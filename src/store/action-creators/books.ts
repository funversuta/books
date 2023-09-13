import { Dispatch } from "redux";
import axios from "axios";
import { BookAction, BookActionTypes } from "../../types/Book";

export const fetchBooks = (
  maxResults = 30,
  startIndex = 0,
  queue = "",
  orderBy = "relevance",
  category = "",
  PrevBooks: any = [],
  TotalBooks = 0
) => {
  return async (dispatch: Dispatch<BookAction>) => {
    try {
      dispatch({ type: BookActionTypes.FETCH_BOOKS });
      const response = await axios.get(
        "https://www.googleapis.com/books/v1/volumes",
        {
          params: {
            q: !category ? queue : `${queue}"+${category}+subject"`,
            maxResults: maxResults,
            startIndex: startIndex,
            orderBy: orderBy,
            key: "AIzaSyCwDw3UBIuJcN8MbV5hLzWlCn0G3kwhmzA",
          },
        }
      );
      setTimeout(() => {
        dispatch({
          type: BookActionTypes.FETCH_BOOKS_SUCCESS,
          payload: response.data,
          StandartBooks: PrevBooks
            ? [...PrevBooks, ...response.data.items]
            : response.data.items,
          TotalBooks:
            TotalBooks != 0 && TotalBooks < response.data.totalItems
              ? TotalBooks
              : response.data.totalItems,
        });
      }, 500);
    } catch (e) {
      dispatch({
        type: BookActionTypes.FETCH_BOOKS_ERROR,
        payload: "Произошла ошибка при загрузке книг",
      });
    }
  };
};
