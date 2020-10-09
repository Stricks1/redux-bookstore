import React from 'react';
import PropTypes from 'prop-types';
import CATEGORIES from '../helper/constants';

const CategoryFilter = ({ changeFilter }) => (
  <label htmlFor="selCategory">
    Filter Category
    <select name="selCategory" id="selCategory" onChange={e => changeFilter(e.target.value)}>
      {
        ['All', ...CATEGORIES].map(item => (
          <option key={item} value={item}>{item}</option>
        ))
      }
    </select>
  </label>
);

CategoryFilter.propTypes = {
  changeFilter: PropTypes.func.isRequired,
};

export default CategoryFilter;
