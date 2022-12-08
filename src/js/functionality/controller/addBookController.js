const addBookController = (func) => {
  const formElement = document.querySelector('.form');
  formElement.addEventListener('submit', func);
};

export default addBookController;
