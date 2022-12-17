import Home from '../../pages/home';
import BookList from '../../pages/bookList';
import AddBook from '../../pages/addBook';
import Contact from '../../pages/contact';
import updateNewBook from '../updateNewBook';
import deleteBook from '../deleteBook';
import setLocalStorage from '../../storage/setStorage';
import getLocalStorage from '../../storage/getStorage';
import loadPage from '../loadPage';
import getFormValues from '../forms/getFormValues';
import addBookController from './addBookController';
import addPopUp from '../popup/addPopUp';
import NewBookAdded from '../newBookAdded';
import removePopUp from '../popup/removePopUp';
import clearFormValues from '../forms/clearFormValues';
import editBookController from './editBookController';

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
    } else if (e.target.classList.contains('edit-btn')) {
      const id = e.target.classList[1];
      const updateBookInfo = (updatedArray) => {
        books = updatedArray;
        setLocalStorage(books);
      };
      editBookController(id, books, updateBookInfo);
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
    const bookFormValues = e.target.querySelectorAll('.book-input');
    getBook = getFormValues(bookFormValues);
    books.push(getBook);
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
        home: Home.getHome(),
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
