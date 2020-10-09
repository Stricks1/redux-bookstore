import React from 'react';
import '../index.css';
import PropTypes from 'prop-types';

const Book = ({ book, remove }) => {
  const { title, category } = book;
  return (
    <div className="book-panel d-flex-row-center">
      <div className="d-flex-column">
        <div className="category">{category}</div>
        <div className="title">{title}</div>
        <div className="author">Author Fullname</div>
        <div className="d-flex-row-center mt-25">
          <button type="button" className="book-buttons">Comments</button>
          <div className="lateral-border">
            <button type="button" onClick={() => remove(book)} className="book-buttons">Remove</button>
          </div>
          <button type="button" className="book-buttons">Edit</button>
        </div>
      </div>
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
