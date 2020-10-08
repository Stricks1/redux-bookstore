import React from 'react';
import { connect } from 'react-redux';
import { RemoveBook, ChangeFilter } from '../actions';
import Book from './book';
import CategoryFilter from './CategoryFilter';

const mapStateToProps = state => ({
  books: state.books,
  filter: state.filter,
});

const mapDispatchToProps = dispatch => ({
  removeBook: book => dispatch(RemoveBook(book)),
  changeFilter: category => dispatch(ChangeFilter(category)),
});

const booksList = ({
  books, filter, removeBook, changeFilter,
}) => {
  const handleRemoveBook = book => {
    removeBook(book);
  };
  const handleFilterChange = category => {
    changeFilter(category);
  };

  return (
    <>
      <CategoryFilter changeFilter={handleFilterChange} />
      <table>
        <tbody>
          {
            books.map(book => (<Book key={book.id} book={book} remove={handleRemoveBook} />)).filter(item => (item.props.book.category === filter || filter === 'All'))
          }
        </tbody>
      </table>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(booksList);
