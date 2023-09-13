import React from "react";
import Main from "./components/Main/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailBook from "./components/DetailBook/DetailBook";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/DetailBook/:id" element={<DetailBook />} />;
        <Route path="/" element={<Main />} />;
      </Routes>
    </BrowserRouter>
  );
};

export default App;
