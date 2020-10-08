import React from 'react';
import PropTypes from 'prop-types';
import { CATEGORIES_FILTER } from '../helper/constants';

const CategoryFilter = ({ changeFilter }) => {
  return (
    <label htmlFor="selCategory">
      Filter Category
      <select name="selCategory" id="selCategory" onChange={e => changeFilter(e.target.value)}>
        {
          CATEGORIES_FILTER.map(item => (
            <option key={item} value={item}>{item}</option>
          ))
        }
      </select>
    </label>
  );
};

CategoryFilter.propTypes = {
  changeFilter: PropTypes.func.isRequired,
};

export default CategoryFilter;
