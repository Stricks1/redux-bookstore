import React from 'react';
import '../index.css';
import PropTypes from 'prop-types';

const Book = ({ book, remove }) => {
  const { title, category } = book;
  return (
    <div className="book-panel">
      <div className="category">{category}</div>
      <div className="title">{title}</div>
      <div className="author">Author Fullname</div>
      <button type="button" onClick={() => remove(book)}>X</button>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  remove: PropTypes.func.isRequired,
};

export default Book;
