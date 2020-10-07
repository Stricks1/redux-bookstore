import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CreateBook from '../actions';
import Categories from '../helper/constants';

const BooksForm = ({ createBook }) => {
  let title;
  let category;

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        createBook(
          {
            id: parseInt(100000 * Math.random(), 10),
            title: title.value,
            category: category.value,
          },
        );
      }}
    >
      <div>
        <label htmlFor="txtTitle">
          Title
          <input type="text" id="txtTitle" name="txtTitle" ref={input => { (title = input); }} />
        </label>
      </div>
      <div>
        <label htmlFor="selCategory">
          Category
          <select name="selCategory" id="selCategory" ref={select => { (category = select); }}>
            {
              Categories.map(item => (
                <option key={item} value={item}>{item}</option>
              ))
            }
          </select>
        </label>
      </div>
      <div>
        <button type="submit">
          Add Book
        </button>
      </div>
    </form>
  );
};

const mapDispatchToProps = dispatch => ({
  createBook: book => dispatch(CreateBook(book)),
});

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(BooksForm);
