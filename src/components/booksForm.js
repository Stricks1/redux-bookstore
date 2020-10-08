import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { CreateBook } from '../actions';
import Categories from '../helper/constants';

class BooksForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: '',
    };
    this.title = '';
    this.category = '';
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.setState({
      title: this.title.value,
      category: this.category.value,
    });
  }

  render() {
    const { title, category } = this.state;
    const { createBook } = this.props;
    return (
      <form
        onSubmit={e => {
          e.preventDefault();
          createBook(
            {
              id: parseInt(100000 * Math.random(), 10),
              title,
              category,
            },
          );
        }}
      >
        <div>
          <label htmlFor="txtTitle">
            Title
            <input type="text" id="txtTitle" name="txtTitle" onChange={this.handleChange} ref={input => { (this.title = input); }} />
          </label>
        </div>
        <div>
          <label htmlFor="selCategory">
            Category
            <select name="selCategory" id="selCategory" onChange={this.handleChange} ref={select => { (this.category = select); }}>
              {
              Categories.map(item => (
                <option key={item} value={item}>{item}</option>
              ))
            }
            </select>
          </label>
        </div>
        <div>
          <button type="submit">
            Add Book
          </button>
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  createBook: book => dispatch(CreateBook(book)),
});

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(BooksForm);
