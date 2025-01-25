import searchIcon from "../icons/searchIcon.svg";
import { ISearchInputProps } from '../interfaces/ISearchInputProps';

const SearchInput = (props: ISearchInputProps) => {
  return (
    <div className='search-field'>
      <input
        className='search-input'
        type='text'
        placeholder='Search'
        onChange={props.handleInputChange}
        value={props.city}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            props.handleSearch();
          }
        }}
      />
      <img className='search-icon' src={searchIcon} alt="" onClick={props.handleSearch} />
    </div>
  );
};

export default SearchInput;