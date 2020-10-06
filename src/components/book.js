import React from 'react';
import '../index.css';
import PropTypes, { object } from 'prop-types';

const Book = book => {
  const { id, title, category } = book;
  return (
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      <td>{category}</td>
    </tr>
  );
};

export default Book;
