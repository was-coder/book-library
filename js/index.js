const title = document.querySelector('.title');
const author = document.querySelector('.author');
const contentDiv = document.querySelector('.content-div');
const form = document.querySelector('.form');

let books = [];
const getID = () => {
  const id = `_${Math.random().toString(36).substring(2, 9)}`;
  return id;
};

const DeclareBook = (title, author) => {
  const bookContent = {
    id: getID(),
    title: '',
    author: '',
  };

  bookContent.title = title.value;
  bookContent.author = author.value;
  books.push(bookContent);
};

const storeLocalValues = () => {
  if (localStorage.getItem('books') === null) {
    books = [];
  } else {
    books = JSON.parse(localStorage.getItem('books'));
  }
  return books;
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
  localStorage.setItem('myBookValues', JSON.stringify(books));
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
  localStorage.setItem('myBookValues', JSON.stringify(books));
};

const clearField = () => {
  title.value = '';
  author.value = '';
};

const GetBook = (e) => {
  e.preventDefault();

  DeclareBook(title, author);
  addBook(books);
  clearField();
};

form.addEventListener('submit', GetBook);
contentDiv.addEventListener('click', removeBook);
window.addEventListener('load', storeLocalValues);
