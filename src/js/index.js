import Header from './reusable/header';
import Home from './pages/home';
import Footer from './reusable/footer';
import controller from './functionality/controller/controller';
import getLocalStorage from './storage/getStorage';

const fragment = document.createDocumentFragment();
const homeSection = document.createElement('main');
const container = document.querySelector('#main-container');

homeSection.className = 'main';
homeSection.id = 'main';
const main = (section) => homeSection.appendChild(section);
main(Home.getHome());

fragment.appendChild(Header.getHeader());
fragment.appendChild(homeSection);
fragment.appendChild(Footer.getFooter());
container.appendChild(fragment);

const bookController = controller();

const getLocal = () => {
  bookController.saveStorage();
  const item = getLocalStorage();
  const contentDiv = document.querySelector('.content-div');
  if (item.length > 0) {
    bookController.loadUpdate(item);
    contentDiv.addEventListener('click', bookController.clickableData);
  }
};

container.addEventListener('click', (e) => {
  if (e.target.classList.contains('nav-link')) {
    bookController.switchTab(e);
  }
});

window.addEventListener('load', getLocal);
