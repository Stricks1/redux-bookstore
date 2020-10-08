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

const ChangeFilter = category => (
  {
    type: 'CHANGE_FILTER ',
    category,
  }
);

export { CreateBook, RemoveBook, ChangeFilter };
