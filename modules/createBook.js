import removeBook from './removeBook.js';
import { booksSection } from '../index.js';

const createBook = () => {
  const getBooks = localStorage.getItem('books');
  const bookList = JSON.parse(getBooks) || [];
  if (bookList.length !== 0) {
    booksSection.replaceChildren();
    bookList.map((item) => {
      const book = document.createElement('div');
      book.className = 'book';
      const titleAuthor = document.createElement('p');
      titleAuthor.innerHTML = `"${item.title}" by ${item.author}`;
      book.appendChild(titleAuthor);
      const remove = document.createElement('button');
      remove.id = item.id;
      remove.onclick = removeBook;
      remove.innerHTML = 'Remove';
      book.appendChild(remove);
      return booksSection.appendChild(book);
    });
  } else {
    booksSection.replaceChildren();
    const message = document.createElement('h3');
    message.innerHTML = 'No Books available at the moment';
    booksSection.appendChild(message);
  }
};

export default createBook;