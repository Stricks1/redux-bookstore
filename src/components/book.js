import React from 'react';
import '../index.css';
import PropTypes, { object } from 'prop-types';

const Book = (book) => {
  const { id, title, category } = book;
  return (
    <div>
      <h3>{id}</h3>
      <h1>{title}</h1>
      <h3>{category}</h3>
    </div>
  );
}

export default Book;
