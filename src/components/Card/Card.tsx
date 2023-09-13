import react, { useState } from "react";
import { useNavigate /* , Route, Routes */ } from "react-router-dom";
/* import DetailBook from "../DetailBook/DetailBook"; */

interface Book {
  items: {
    id: any;
    volumeInfo: {
      title: string;
      imageLinks: {
        smallThumbnail: string;
      };
      categories?: string[];
      authors?: string[];
    };
  }[];
}

const Card = ({ items }: Book) => {
  const navigate = useNavigate();
  return (
    <>
      {items?.map((item) => {
        let thumbnail =
          item.volumeInfo.imageLinks &&
          item.volumeInfo.imageLinks.smallThumbnail;
        if (thumbnail != undefined) {
          return (
            <>
              <div
                className="card"
                onClick={() => {
                  navigate(`/DetailBook/${item.id}`);
                }}
              >
                <img src={thumbnail} alt="" />
                <div className="bottom">
                  <span>{item.volumeInfo.categories}</span>
                  <h3 className="title">{item.volumeInfo.title}</h3>
                  <h4>{item.volumeInfo?.authors?.join(", ")}</h4>
                </div>
              </div>
            </>
          );
        }
      })}
    </>
  );
};
export default Card;
