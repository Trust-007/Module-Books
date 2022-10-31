import createBook from './createBook.js';

const form = (form) => {
  form.onsubmit = (event) => {
    event.preventDefault();
    const { title, author } = form.elements;
    const book = {
      id: new Date().toString(),
      title: title.value,
      author: author.value,
    };
    const getBooks = localStorage.getItem('books');
    const bookList = JSON.parse(getBooks) || [];
    bookList.push(book);
    localStorage.setItem('books', JSON.stringify(bookList));
    createBook();
    title.value = '';
    author.value = '';
  };
};

export default form;