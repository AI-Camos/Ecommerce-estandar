import React from 'react';

const Search = ({search, searchInput, handlerSearch}) => {
  return (
    <div className="Search">
    <input type="text" value={search} ref={searchInput} onChange={handlerSearch} />
  </div>

  );
}

export default Search;