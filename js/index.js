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

class DeclareBook {
  constructor(id, title, author) {
    this.id = id;
    this.title = title;
    this.author = author;
  }

  bookInfo() {
    const bookContent = {
      id: this.id,
      title: title.value,
      author: title.value,
    };
    books.push(bookContent);
  }

  clearField() {
    this.title.value = '';
    this.author.value = '';
  }
}

const getLocalStorage = (getValue) => {
  books = localStorage.getItem(getValue) === null ? [] : JSON.parse(localStorage.getItem(getValue));
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

const getBook = (e) => {
  e.preventDefault();
  const newBookDeclared = new DeclareBook(getID(), title, author);
  newBookDeclared.bookInfo();
  newBookDeclared.clearField();
  addBook(books);
};

form.addEventListener('submit', getBook);
contentDiv.addEventListener('click', removeBook);
window.addEventListener('load', getLocalStorage(books));
