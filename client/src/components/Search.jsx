import React, { useContext } from 'react';
import { FormControl } from 'react-bootstrap';
import { AppContext } from '../context/AppContext';

const Search = () => {
  const { setSearch } = useContext(AppContext);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <FormControl
        type="text"
        placeholder="Search posts..."
        className="mb-4"
        onChange={handleSearch}
      />
    </div>
  );
};

export default Search;
