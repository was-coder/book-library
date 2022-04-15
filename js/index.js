const title = document.querySelector('#title');
const author = document.querySelector('#author');
const contentDiv = document.querySelector('#content-div');
const form = document.querySelector('#form');

const getID = () => {
  const id = new Date()
    .getTime()
    .toString(36)
    .concat(performance.now().toString(), Math.random().toString())
    .replace(/\./g, '');
  return id;
};

let books = [];

// Getting and setting lovcal storage
const getLocalStorage = (getValue) => {
  books = localStorage.getItem(getValue) === null ? [] : JSON.parse(localStorage.getItem(getValue));
  return books;
};

const setLocalStorage = (storageName, inputName) => {
  localStorage.setItem(storageName, JSON.stringify(inputName));
};

// Using class to add and remove boook data
class DeclareBook {
  constructor(id, title, author) {
    this.id = id;
    this.title = title;
    this.author = author;
  }

  addBook() {
    const contents = document.createElement('tr');
    contents.innerHTML = `
  <td class="page">${this.title}</td>
  <td class="page">${this.author}</td>
  <td><button type="submit" id="${this.id}" class="remove-btn text-capitalize">Remove</button></td>
  `;
    contentDiv.appendChild(contents);
  }

  removeBookData() {
    books = books.filter((book) => book.id !== this.id);
    setLocalStorage('myBookValues', books);
  }
}

// Clearing form field
const clearField = () => {
  title.value = ' ';
  author.value = ' ';
};

// Updating book from local storage
const addBook = (book) => {
  const { id, Title, Author } = book;
  const contents = document.createElement('tr');
  contents.innerHTML = `
  <td class="page">${Title}</td>
  <td class="page">${Author}</td>
  <td><button type="submit" id="${id}" class="remove-btn text-capitalize">Remove</button></td>
  `;
  contentDiv.appendChild(contents);
};

const displayLocalStorage = () => {
  const display = getLocalStorage('myBookValues');
  display.forEach((book) => addBook(book));
};

// Remove book function
const removeBook = (e) => {
  e.preventDefault();
  let id;
  if (e.target.classList.contains('remove-btn')) {
    id = e.target.id;
    const bookId = document.querySelector(`#${id}`);
    const getContent = bookId.parentElement.parentElement;
    contentDiv.removeChild(getContent);
  }
  const newBookDeclared = new DeclareBook(id);
  newBookDeclared.removeBookData();
};

// Getting all input fields
const getFormInputs = (getInput) => {
  const inputValues = { id: getID() };
  getInput.forEach((input) => {
    inputValues[input.name] = input.value;
  });
  return inputValues;
};

// Getting book values to be displayed
const getBook = (e) => {
  e.preventDefault();
  const bookInput = e.target.querySelectorAll('.book-input');
  const returnFormInputs = getFormInputs(bookInput);
  const { id, Title, Author } = returnFormInputs;
  books.push(returnFormInputs);

  const newBookDeclared = new DeclareBook(id, Title, Author);
  newBookDeclared.addBook();
  clearField();
  setLocalStorage('myBookValues', books);
};

// Event listeners
form.addEventListener('submit', getBook);
contentDiv.addEventListener('click', removeBook);
window.addEventListener('load', displayLocalStorage);
