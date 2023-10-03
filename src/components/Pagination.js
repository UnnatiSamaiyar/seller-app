import React from 'react';
import './Pagination.css';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const maxPagesToShow = 10;
  let startPage = 1;
  let endPage = totalPages;

  if (totalPages > maxPagesToShow) {
    const halfMax = Math.floor(maxPagesToShow / 2);
    if (currentPage <= halfMax) {
      endPage = maxPagesToShow;
    } else if (currentPage + halfMax >= totalPages) {
      startPage = totalPages - maxPagesToShow + 1;
    } else {
      startPage = currentPage - halfMax;
      endPage = currentPage + halfMax;
    }
  }

  const pageNumbers = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);

  return (
    <div className='pagination'>
      {currentPage > 1 && (
        <button onClick={() => onPageChange(currentPage - 1)}>Previous</button>
      )}
      {pageNumbers.map((pageNum) => (
        <button
          key={pageNum}
          onClick={() => onPageChange(pageNum)}
          className={currentPage === pageNum ? 'active' : ''}
        >
          {pageNum}
        </button>
      ))}
      {currentPage < totalPages && (
        <button onClick={() => onPageChange(currentPage + 1)}>Next</button>
      )}
    </div>
  );
};

export default Pagination;
