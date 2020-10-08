import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import combinedReducer from './reducers';

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

const store = createStore(combinedReducer, bookTest);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
