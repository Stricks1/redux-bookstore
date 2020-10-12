import { CREATE_BOOK, REMOVE_BOOK } from '../actions';

function books(state = [], action) {
  switch (action.type) {
    case CREATE_BOOK:
      return [...state, action.book];

    case REMOVE_BOOK:
      return state.filter(item => item.id !== action.book.id);
    default:
      return state;
  }
}

export default books;
