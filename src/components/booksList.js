import React from 'react';
import { connect } from 'react-redux';
import { RemoveBook, ChangeFilter } from '../actions';
import Book from './book';
import CategoryFilter from './CategoryFilter';

const mapStateToProps = state => ({
  books: state.books,
  filter: state.filter,
});

const mapDispatchToProps = {
  RemoveBook,
  ChangeFilter,
};

const booksList = ({
  books, filter, RemoveBook, ChangeFilter,
}) => {
  const handleRemoveBook = book => {
    RemoveBook(book);
  };
  const handleFilterChange = category => {
    ChangeFilter(category);
  };

  return (
    <>
      <CategoryFilter changeFilter={handleFilterChange} />
      <table>
        <tbody>
          {
            books.map(book => (<Book key={book.id} book={book} remove={handleRemoveBook} />))
              .filter(item => (item.props.book.category === filter || filter === 'All'))
          }
        </tbody>
      </table>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(booksList);
