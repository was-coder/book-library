import EditBook from '../../pages/editBook';
import removePopUp from '../popup/removePopUp';
import addPopUp from '../popup/addPopUp';
import getFormValues from '../forms/getFormValues';
import addBookController from './addBookController';
import EditSuccess from '../popup/editPopUp';

const editBookController = (uniqueId, books, callback) => {
  const updateBookInfo = [...books];
  const bookArray = updateBookInfo.find((book) => book.id === uniqueId);
  const main = document.querySelector('#main');
  let getBook;

  const switchedBookList = () => {
    removePopUp();
    addPopUp(main, EditSuccess.getEditSuccess, getBook);
    const returnBookList = document.querySelector('.list-button');
    returnBookList.addEventListener('click', removePopUp);
  };

  const NewData = (e) => {
    e.preventDefault();
    const books = e.target.querySelectorAll('.book-input');
    getBook = getFormValues(books);
    getBook.id = uniqueId;
    updateBookInfo.splice(updateBookInfo.indexOf(bookArray), 1, getBook);
    callback(updateBookInfo);
    const { title, author } = getBook;
    const ArrayIteration = [title, author];
    const bookId = document.querySelector(`.${uniqueId}`);
    const bookElement = bookId.parentElement.parentElement;
    for (let i = 0; i < 2; i += 1) {
      bookElement.children[i].textContent = ArrayIteration[i];
    }
    switchedBookList();
  };

  addPopUp(main, EditBook.getBook);
  EditBook.EditForm(bookArray);
  const cancelEdit = document.querySelector('.cancel-btn');
  cancelEdit.addEventListener('click', removePopUp);
  addBookController(NewData);
};

export default editBookController;
