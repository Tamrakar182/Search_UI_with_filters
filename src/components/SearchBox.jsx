const SearchBox = ({ searchText, setSearchText}) => {
  const emptySearchText = () => {
    setSearchText("");
  };

  const handleChange = (event) => {
    const newSearchText = event.target.value;
    setSearchText(newSearchText);
  };

  return (
    <>
      <form className="searchContainer">
        <input
          className="searchField"
          value={searchText}
          onChange={handleChange}
        />
        {searchText.length > 0 ? (
          <p onClick={emptySearchText} >Clear Text</p>
        ) : (
          <img src="/assets/search.svg" className="searchIcon" />
        )}
      </form>
    </>
  );
};
export default SearchBox;