const removePopUp = () => {
  const main = document.querySelector('#main');
  const activePopUp = document.querySelector('.popup-container');
  activePopUp.classList.remove('pop-active');
  main.removeChild(main.childNodes[1]);
};

export default removePopUp;
