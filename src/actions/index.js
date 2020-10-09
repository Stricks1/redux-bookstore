const CREATE_BOOK = 'CREATE_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
const CHANGE_FILTER = 'CHANGE_FILTER';

const CreateBook = book => (
  {
    type: CREATE_BOOK,
    book,
  }
);

const RemoveBook = book => (
  {
    type: REMOVE_BOOK,
    book,
  }
);

const ChangeFilter = category => (
  {
    type: CHANGE_FILTER,
    category,
  }
);

export {
  CreateBook, RemoveBook, ChangeFilter, CREATE_BOOK, REMOVE_BOOK, CHANGE_FILTER,
};
