import BookList from './bookList';
import AddBook from './addBook';
import Contact from './contact';
import updateNewBook from './updateNewBook';
import deleteBook from './deleteBook';
import setLocalStorage from './storage/setStorage';
import getLocalStorage from './storage/getStorage';
import loadPage from './loadPage';
import getFormValues from './getFormValues';
import addBookController from './addBookController';
import addPopUp from './addPopUp';
import NewBookAdded from './newBookAdded';
import removePopUp from './removePopUp';
import clearFormValues from './clearFormValues';

//

const controller = () => {
  let books = [];
  let getBook;

  const saveStorage = () => {
    books = getLocalStorage();
  };

  const clickableData = (e) => {
    e.preventDefault();

    if (e.target.classList.contains('remove-btn')) {
      const { id } = e.target;
      const updatedBooks = books.filter((book) => book.id !== id);
      books = updatedBooks;
      deleteBook(id);
      setLocalStorage(books);
    }
  };

  const loadUpdate = (books) => {
    updateNewBook(books);
  };

  const switchData = (e) => {
    if (e.target.classList.contains('button')) {
      const tab = BookList.getBookList();
      removePopUp();
      const main = document.querySelector('#main');
      loadPage(main, tab);
      updateNewBook(books);
      document.querySelector('.content-div').addEventListener('click', clickableData);
    }
  };

  const switchedBookList = () => {
    const main = document.querySelector('#main');
    addPopUp(main, NewBookAdded.updateBookAdded, getBook);
    const activePopUp = document.querySelector('.success-container');
    const addNewBook = document.querySelector('.addNewBook-button');
    const returnBookList = document.querySelector('.list-button');
    returnBookList.addEventListener('click', switchData);
    activePopUp.addEventListener('click', removePopUp);
    addNewBook.addEventListener('click', removePopUp);
  };

  const add = (e) => {
    e.preventDefault();
    // // books = getLocalStorage();
    const bookFormValues = e.target.querySelectorAll('.book-input');
    getBook = getFormValues(bookFormValues);
    books.push(getBook);
    // books = [...books, getBook];
    setLocalStorage(books);
    switchedBookList();
    clearFormValues(bookFormValues);
  };

  const switched = (newLink, currentLink) => {
    const main = document.querySelector('#main');
    loadPage(main, newLink);

    if (currentLink === 'bookList') {
      const contentDiv = document.querySelector('.content-div');
      updateNewBook(books);
      contentDiv.addEventListener('click', clickableData);
    } else if (currentLink === 'addBook') {
      addBookController(add);
    }
  };

  const switchTab = (e) => {
    if (e.target.classList.contains('nav-link') || e.target.classList.contains('button')) {
      const tab = {
        bookList: BookList.getBookList(),
        addBook: AddBook.getBookAdded(),
        contact: Contact.getContact(),
      };
      const currentLink = e.target.dataset.target;
      const newLink = tab[currentLink];
      switched(newLink, currentLink);
    }
  };

  return {
    saveStorage,
    clickableData,
    loadUpdate,
    switchTab,
  };
};

export default controller;
