import React from 'react';
import PropTypes from 'prop-types';
import CATEGORIES from '../helper/constants';

const CategoryFilter = ({ changeFilter }) => (
  <div className="header-panel">
    <div className="filter-logo-user">
      <div className="d-flex-row-center">
        <span className="logo">
          Bookstore CMS
        </span>
        <label htmlFor="selCategory" className="d-flex-row-end filter-label">
          BOOKS
          <select name="selCategory" id="selCategory" className="filter-select" onChange={e => changeFilter(e.target.value)}>
            {
              ['All', ...CATEGORIES].map(item => (
                <option key={item} value={item}>{item}</option>
              ))
            }
          </select>
        </label>
      </div>

      <div>
        <svg
          version="1.1"
          x="0px"
          y="0px"
          width="17px"
          height="17px"
          viewBox="0 0 28.667 28.667"
          className="user-icon"
        >
          <g fill="#0290ff">
            <path d="M18.486,18.104c1.034-1.013,1.775-2.531,2.115-4.648c0.455,0.083,1.053-0.387,1.261-1.179 c0.214-0.813,0.462-2.178-0.003-2.302c-0.137-0.037-0.279-0.009-0.422,0.063v-2.26c0.076-2.457-0.26-4.829-2.939-5.856
                  C18.009,0.915,17.977,0,17.977,0c-1.206,1.086-5.785,1.526-5.785,1.526l0.052,0.014C6.438,2.137,7.276,4.224,7.276,7.777v2.26 C7.134,9.965,6.992,9.936,6.854,9.974c-0.463,0.124-0.323,1.437-0.109,2.251c0.209,0.798,0.921,1.321,1.377,1.229
                  c0.347,2.223,1.041,3.703,1.995,4.67c-4.443,1.625-7.604,5.728-7.604,10.543h23.641C26.152,23.827,22.962,19.71,18.486,18.104z"
            />
          </g>
        </svg>

      </div>
    </div>
  </div>
);

CategoryFilter.propTypes = {
  changeFilter: PropTypes.func.isRequired,
};

export default CategoryFilter;
