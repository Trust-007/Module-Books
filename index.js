/* eslint-disable */
import createBook from './modules/createBook.js';
import form from './modules/form.js';
import spa from './modules/spa.js';
import { DateTime } from './modules/luxon.js';

export const booksSection = document.getElementById('book-list');
const formData = document.getElementById('form');
createBook();
form(formData);

// spa code start

const logo = document.getElementById('logo');
const listLink = document.getElementById('list');
const addNewLink = document.getElementById('add-new');
const contactLink = document.getElementById('contact');
const booksPage = document.getElementById('books-section');
const formPage = document.getElementById('form-section');
const contactPage = document.getElementById('contact-section');
const elements = {
  logo,
  listLink,
  addNewLink,
  contactLink,
  booksPage,
  formPage,
  contactPage,
};

spa(elements);

// adding functional date

setInterval(() => {
  const date = document.getElementById('date');
  const now = DateTime.now();
  date.innerHTML = now.toLocaleString(DateTime.DATETIME_MED);
}, 1000);
