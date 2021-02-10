import React from 'react';
import { useDispatch } from 'react-redux';
import { setVisibilityFilter } from '../store/visibilityFilterReducer';

function FilterLink({ children, filter }) {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(setVisibilityFilter(filter));
  };

  return (
    <button className="btn btn-primary mx-2" onClick={(e) => handleClick(e)}>
      {children}
    </button>
  );
}

export default FilterLink;
