const addPopUp = (main, func, getBook) => {
  main.appendChild(func(getBook));
  const activePopUp = document.querySelector('.success-container');
  const stopPropagation = document.querySelector('.success-background');
  activePopUp.classList.add('pop-active');
  stopPropagation.addEventListener('click', (e) => e.stopPropagation());
};

export default addPopUp;
