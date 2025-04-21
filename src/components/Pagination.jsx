import React from "react";

function Pagination({ paginate, currentPage, totalPages }) {
  return (
    <div className="pagination">
      <button
        onClick={() => paginate(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>

      <span>
        Page {currentPage} of {totalPages}
      </span>

      <button
        onClick={() => paginate(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
