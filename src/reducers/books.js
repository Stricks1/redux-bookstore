const bookTest = [
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
];

function books(state = bookTest, action) {
  switch (action.type) {
    case 'CREATE_BOOK':
      return [...state, action.book];

    case 'REMOVE_BOOK':
      return [...state.filter(item => item.id !== action.book.id)];
    default:
      return state;
  }
}

export default books;
