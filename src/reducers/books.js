import React from 'react';
import '../index.css';
import PropTypes, { object } from 'prop-types';

/*
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
      category: 'another Action',
    },
  ],
}*/

function reducer(state = [], action) {
  switch (action.type) {
    case 'CREATE_BOOK':
      return [...state, action.book];

    case 'REMOVE_BOOK':
      return state;
    default:
      return state;
  }
}

export default reducer;
