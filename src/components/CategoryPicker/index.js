import React from 'react';
import { connect } from 'react-redux';
import { getCategories, getCategory } from '../../redux/selectors';
import { setCategory } from '../../redux/actions/todo';

const CategoryPicker = props => {
  const {
    categories = [],
    category,
    setCategory: setCategoryAction
  } = props;

  const handleSelect = event => {
    const selection = event.target.value;
    setCategoryAction(selection);
  }

  return <select value={category} onChange={handleSelect}>
      <option key="none" value="">All Categories</option>
      {categories.map(item => <option key={item} value={item}>{item}</option>)}
    </select>;
};

const mapStateToProps = state => ({
    categories: getCategories(state),
    category: getCategory(state)
});

export default connect(mapStateToProps, { setCategory })(CategoryPicker);
