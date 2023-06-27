const SearchBox = ({ searchText, handleSearchText }) => {
  return (
    <>
      <form className="searchContainer">
        <input
          className="searchField"
          value={searchText}
          onChange={handleSearchText}
        />
      </form>
    </>
  );
};
export default SearchBox;