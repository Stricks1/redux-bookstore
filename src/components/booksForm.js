import React from 'react';

const BooksForm = () => (
  <form>
    <div>
      <label htmlFor="txtTitle">Title</label>
      <input type="text" id="txtTitle" name="txtTitle" />
    </div>
    <div>
      <label htmlFor="selCategory">Category</label>
      <select name="selCategory" id="selCategory">
        <option value="1">Action</option>
        <option value="2">Biography</option>
        <option value="3">History</option>
        <option value="4">Horror</option>
        <option value="5">Kids</option>
        <option value="6">Learning</option>
        <option value="7">Sci-Fi</option>
      </select>
    </div>
  </form>
);

export default BooksForm;
