const spa = (elements) => {
  const {
    logo, listLink, addNewLink, contactLink, booksPage, formPage, contactPage,
  } = elements;
  logo.addEventListener('click', () => {
    formPage.style.display = 'none';
    contactPage.style.display = 'none';
    booksPage.style.display = 'block';
    listLink.firstChild.style.color = 'cornflowerblue';
    addNewLink.firstChild.style.color = 'black';
    contactLink.firstChild.style.color = 'black';
  });

  listLink.addEventListener('click', () => {
    formPage.style.display = 'none';
    contactPage.style.display = 'none';
    booksPage.style.display = 'block';
    listLink.firstChild.style.color = 'cornflowerblue';
    addNewLink.firstChild.style.color = 'black';
    contactLink.firstChild.style.color = 'black';
  });

  addNewLink.addEventListener('click', () => {
    booksPage.style.display = 'none';
    contactPage.style.display = 'none';
    formPage.style.display = 'block';
    listLink.firstChild.style.color = 'black';
    addNewLink.firstChild.style.color = 'cornflowerblue';
    contactLink.firstChild.style.color = 'black';
  });

  contactLink.addEventListener('click', () => {
    formPage.style.display = 'none';
    booksPage.style.display = 'none';
    contactPage.style.display = 'block';
    listLink.firstChild.style.color = 'black';
    addNewLink.firstChild.style.color = 'black';
    contactLink.firstChild.style.color = 'cornflowerblue';
  });
};

export default spa;