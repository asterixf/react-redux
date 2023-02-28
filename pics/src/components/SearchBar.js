function SearchBar({ onSubmit }) {
  const handleFormSubmit = (event) => {
    event.preventDefault();

    onSubmit('car');
  }

  return (
    <div>
      <form onSubmit={handleFormSubmit} >
      <input />
      </form>
    </div>
  )
}

export default SearchBar;
