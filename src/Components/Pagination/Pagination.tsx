import React from "react";
import usePagination from "../../Hooks/usePagination.tsx";

function Pagination({ inf }) {
  const {
    nextPage,
    prevPage,
    page,
    setPage,
    totalPages,
  } = usePagination({
    contentPerPage: 5,
    count: inf.length,
  });
  return (
    <div className="pagination">
      <p className="text">
        {page}/{totalPages}
      </p>
      <div className="pag-block">
        <button onClick={prevPage} className="page">
          &larr;
        </button>
        {[...Array(totalPages).keys()].map((el) => (
          <button
            onClick={() => setPage(el + 1)}
            key={el}
            className={`page ${page === el + 1 ? "active" : ""} number`}
          >
            {el + 1}
          </button>
        ))}
        <button onClick={nextPage} className="page">
          &rarr;
        </button>
      </div>
    </div>
  );
}
export default Pagination;
