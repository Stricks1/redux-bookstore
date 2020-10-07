const CreateBook = book => (
  {
    type: 'CREATE_BOOK',
    book,
  }
);

const RemoveBook = bookId => (
  {
    type: 'REMOVE_BOOK',
    bookId,
  }
);

export { CreateBook, RemoveBook };
