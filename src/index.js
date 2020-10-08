import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import shortid from 'shortid';
import App from './App';
import combinedReducer from './reducers';

const bookTest = {
  books: [
    {
      id: shortid.generate().toUpperCase(),
      title: 'some Book',
      category: 'Action',
    },
    {
      id: shortid.generate().toUpperCase(),
      title: 'another Book',
      category: 'Horror',
    },
  ],
  filter: 'All',
};

const store = createStore(combinedReducer, bookTest);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
