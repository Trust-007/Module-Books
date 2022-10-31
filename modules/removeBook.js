import createBook from './createBook.js';

const removeBook = (e) => {
  const itemId = e.target.id;
  const getBooks = localStorage.getItem('books');
  const bookList = JSON.parse(getBooks);
  const filteredBooks = bookList.filter((item) => {
    if (itemId !== item.id && bookList.length !== 1) {
      return item;
    }
    return '';
  });
  localStorage.setItem('books', JSON.stringify(filteredBooks));
  createBook();
};

export default removeBook;