import React from 'react';
import searchIcon from "../icons/searchIcon.svg";

interface SearchInputProps {
  city: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSearch: () => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ city, handleInputChange, handleSearch }) => {
  return (
    <div className='search-field'>
      <input
        className='search-input'
        type='text'
        placeholder='Search'
        onChange={handleInputChange}
        value={city}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleSearch();
          }
        }}
      />
      <img className='search-icon' src={searchIcon} alt="" onClick={handleSearch} />
    </div>
  );
};

export default SearchInput;