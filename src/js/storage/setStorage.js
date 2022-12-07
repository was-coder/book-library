const setLocalStorage = (books) => {
  localStorage.setItem('myBookValues', JSON.stringify(books));
};

export default setLocalStorage;
