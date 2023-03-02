import BookShow from './BookShow';

function BookList({ books, onDelete, onEdit }) {
  const renderBooks = books.map((book) => {
    return <BookShow
    onDelete={onDelete}
    onEdit={onEdit}
    key={book.id}
    book={book} />
  })
  return <div className='book-list'>{renderBooks}</div>
}

export default BookList;
