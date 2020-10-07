import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CreateBook from '../actions';

const BooksForm = ({ createBook }) => {
  let title;
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        createBook({ id: 9, title: title.value, category: 'Horror' });
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
          <select name="selCategory" id="selCategory">
            <option value="1">Action</option>
            <option value="2">Biography</option>
            <option value="3">History</option>
            <option value="4">Horror</option>
            <option value="5">Kids</option>
            <option value="6">Learning</option>
            <option value="7">Sci-Fi</option>
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
