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
        <ul className="d-flex-row-center mt-25 without-icons">
          <li><button type="button" className="book-buttons">Comments</button></li>
          <li className="lateral-border"><button type="button" onClick={() => remove(book)} className="book-buttons">Remove</button></li>
          <li><button type="button" className="book-buttons">Edit</button></li>
        </ul>
      </div>
      <div className="d-flex-row-center m-right-147">
        <div className="d-flex-row-center complete-container">
          <div className="oval-1" />
          <div className="d-flex-column">
            <span className="perc-book">78%</span>
            <span className="span-book-c">Completed</span>
          </div>
        </div>
        <div>
          <div className="d-flex-column">
            <span className="update-text">CURRENT CHAPTER</span>
            <span className="current-chapter">Chapter 17</span>
            <span className="update-progress">UPDATE PROGRESS</span>
          </div>
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
