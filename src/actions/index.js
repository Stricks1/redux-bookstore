const CreateBook = book => (
  {
    type: 'CREATE_BOOK',
    book,
  }
);

const RemoveBook = book => (
  {
    type: 'REMOVE_BOOK',
    book,
  }
);

export { CreateBook, RemoveBook };
