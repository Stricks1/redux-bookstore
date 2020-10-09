import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import { CreateBook } from '../actions';
import CATEGORIES from '../helper/constants';

class BooksForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: '',
    };
    this.title = React.createRef();
    this.category = React.createRef();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange() {
    this.setState({
      title: this.title.value,
      category: this.category.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    const { title, category } = this.state;
    const { CreateBook } = this.props;

    if (title.trim().length === 0) {
      return;
    }
    if (category.includes('Select')) {
      return;
    }

    CreateBook(
      {
        id: shortid.generate().toUpperCase(),
        title,
        category,
      },
    );
    e.target.reset();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="txtTitle">
            Title
            <input type="text" id="txtTitle" name="txtTitle" onChange={this.handleChange} ref={input => { (this.title = input); }} className="form-input" />
          </label>
        </div>
        <div>
          <label htmlFor="selCategory">
            Category
            <select name="selCategory" id="selCategory" onChange={this.handleChange} ref={select => { (this.category = select); }} className="form-input">
              {
                ['Select Category', ...CATEGORIES].map(item => (
                  <option key={item} value={item}>{item}</option>
                ))
              }
            </select>
          </label>
        </div>
        <div>
          <button type="submit" className="add-button">
            Add Book
          </button>
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = {
  CreateBook,
};

BooksForm.propTypes = {
  CreateBook: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(BooksForm);
