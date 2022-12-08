const deleteBook = (id) => {
  const contentDiv = document.querySelector('.content-div');
  const bookId = document.querySelector(`#${id}`);
  const removeContent = bookId.parentElement.parentElement;
  contentDiv.removeChild(removeContent);
};

export default deleteBook;
