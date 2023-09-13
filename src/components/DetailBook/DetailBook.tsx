import React, { useEffect, useState } from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";
import Card from "../Card/Card";
import searchIcon from "../../search.svg";
import Selects from "../Selects/Select";

const DetailBook: React.FC = () => {
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

  const detailBook = Books.items?.find(
    (item: any) => item.id === window.location.pathname.slice(12)
  );

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
      <div style={{ display: "flex" }}>
        <img
          className="bigPicture"
          src={detailBook.volumeInfo.imageLinks.thumbnail}
          alt=""
        />
        <div className="textInfo">
          <span>{detailBook.volumeInfo.categories}</span>
          <h3 className="title">{detailBook.volumeInfo.title}</h3>
          <h4>{detailBook.volumeInfo?.authors?.join(", ")}</h4>
        </div>
      </div>
    </div>
  );
};

export default DetailBook;
