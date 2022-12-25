const loadPage = (main, tab) => {
  main.removeChild(main.childNodes[0]);
  main.appendChild(tab);
};

export default loadPage;
