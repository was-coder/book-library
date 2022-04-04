const title = document.querySelector('#title');
const author = document.querySelector('#author');
const contentDiv = document.querySelector('#content-div');
const form = document.querySelector('#form');

let books = [];
const getID = () => {
  const id = new Date()
    .getTime()
    .toString(36)
    .concat(performance.now().toString(), Math.random().toString())
    .replace(/\./g, '');
  return id;
};

const declareBook = (title, author) => {
  const bookContent = {
    id: getID(),
    title: '',
    author: '',
  };

  bookContent.title = title.value;
  bookContent.author = author.value;
  books.push(bookContent);
};

const getLocalStorage = (databaseName) => {
  books = localStorage.getItem(databaseName) === null
    ? []
    : JSON.parse(localStorage.getItem(databaseName));
  return books;
};

const setLocalStorage = (firstValue, secondValue) => {
  localStorage.setItem(firstValue, JSON.stringify(secondValue));
};

const addBook = (inputBook) => {
  let contents = '';
  inputBook.forEach((book) => {
    contents += `<div class="content">
  <p class="pages">Title: ${book.title}</p>
  <p class="pages">Author: ${book.author}</p>
  <button type="submit" id="${book.id}" class="remove-btn btn">Remove</button> <hr>
  </div>
  `;
    contentDiv.innerHTML = contents;
  });
  setLocalStorage('myBookValues', books);
};

const removeBook = (e) => {
  e.preventDefault();
  let id;
  if (e.target.classList.contains('remove-btn')) {
    id = e.target.id;
    const bookId = document.getElementById(`${id}`);
    const getContent = bookId.parentElement;
    contentDiv.removeChild(getContent);
  }
  books = books.filter((book) => book.id !== id);
  setLocalStorage('myBookValues', books);
};

const clearField = () => {
  title.value = '';
  author.value = '';
};

const getBook = (e) => {
  e.preventDefault();

  declareBook(title, author);
  addBook(books);
  clearField();
};

form.addEventListener('submit', getBook);
contentDiv.addEventListener('click', removeBook);
window.addEventListener('load', getLocalStorage(books));
