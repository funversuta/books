import React, { useEffect, useState } from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";
import Card from "../Card/Card";
import searchIcon from "../../search.svg";
import Selects from "../Selects/Select";

const Main: React.FC = () => {
  const {
    error,
    loading,
    Books,
    startIndex,
    maxResults,
    StandartBooks,
    TotalBooks,
  } = useTypedSelector((state: { book: any }) => state.book);
  const { fetchBooks } = useActions();
  const [sort, setSort] = useState("relevance");
  const [searchValue, setSearchValue] = useState("js");
  const [currentCategory, setCurrentCategory] = useState("all");

  useEffect(() => {
    fetchBooks(maxResults, startIndex, searchValue, sort, currentCategory);
  }, [searchValue, startIndex, sort, currentCategory]);

  if (error) {
    return <h1>{error}</h1>;
  }

  const LoadMore = () => {
    fetchBooks(
      maxResults,
      StandartBooks.length + 1,
      searchValue,
      sort,
      currentCategory,
      StandartBooks,
      TotalBooks
    );
  };

  return (
    <div>
      <div className="header">
        <div className="row1">
          <h1>
            A room without books is like
            <br /> a body without a soul.
          </h1>
        </div>
        <div className="row2">
          <h2>Find Your Book</h2>
          <div className="search">
            <input
              type="text"
              placeholder="Enter Your Book Name"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <button>
              <i className="fas fa-search"></i>
              <img src={searchIcon} width={15} height={15} alt="" />
            </button>
          </div>

          <Selects
            sort={sort}
            setSort={setSort}
            currentCategory={currentCategory}
            setCurrentCategory={setCurrentCategory}
          />
        </div>
      </div>
      {!Books.length && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "15px",
          }}
        >
          totalBooks: {TotalBooks}
        </div>
      )}
      <div className="container">{<Card items={StandartBooks} />}</div>
      <button
        style={{
          display: "flex",
          margin: "auto",
        }}
        onClick={LoadMore}
      >
        Load more
      </button>
    </div>
  );
};

export default Main;
