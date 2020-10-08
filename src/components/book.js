import React from 'react';
import '../index.css';
import PropTypes from 'prop-types';

const Book = ({ book, remove }) => {
  const { id, title, category } = book;
  return (
    <tr>
      <td>
        <button type="button" onClick={() => remove(book)}>X</button>
      </td>
      <td>{id}</td>
      <td>{title}</td>
      <td>{category}</td>
    </tr>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  remove: PropTypes.func.isRequired,
};

export default Book;
