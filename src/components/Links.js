import React from 'react';
import FilterLink from './FilterLink';
import { visibilityFilters } from '../store/visibilityFilterReducer';

function Links() {
  return (
    <>
      <FilterLink filter={visibilityFilters.SHOW_ALL}>All</FilterLink>
      <FilterLink filter={visibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
      <FilterLink filter={visibilityFilters.SHOW_COMPLETED}>
        Completed
      </FilterLink>
    </>
  );
}

export default Links;
