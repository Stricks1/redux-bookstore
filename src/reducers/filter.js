function filter(state = null, action) {
  switch (action.type) {
    case 'CHANGE_FILTER ':
      if (action.category === 'All') {
        return null;
      }
      return action.category;
    default:
      return state;
  }
}

export default filter;
