const addPopUp = (main, func, getBook) => {
  const getFunc = func(getBook);
  main.appendChild(getFunc);
  const activePopUp = document.querySelector('.popup-container');
  const stopPropagation = document.querySelector('.popup-background');
  activePopUp.classList.add('pop-active');
  stopPropagation.addEventListener('click', (e) => e.stopPropagation());
};

export default addPopUp;
