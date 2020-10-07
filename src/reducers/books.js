const bookTest = {
  books: [
    {
      id: 1,
      title: 'some Book',
      category: 'Action',
    },
    {
      id: 2,
      title: 'another Book',
      category: 'Horror',
    },
  ],
};

function reducer(state = bookTest, action) {
  switch (action.type) {
    case 'CREATE_BOOK':
      return { books: [...state.books, action.book] };

    case 'REMOVE_BOOK':
      return state;
    default:
      return state;
  }
}

export default reducer;
