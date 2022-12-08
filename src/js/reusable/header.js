class Header {
  static getHeader() {
    const headerDiv = document.createElement('header');
    headerDiv.className = 'header';
    headerDiv.innerHTML = `
     <nav class="navbar navbar-expand-md justify-content-between">
          <a class="navbar-brand nav-link" data-target="home" aria-label="Home button">
            <span class="span-logo-1">Awesome</span><span class="span-logo-2">Library</span
            >
          </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon">
    <i class="fa-solid fa-burger fa-2x"></i>
    </span>
  </button>
          <div class="collapse navbar-collapse " id="navbarSupportedContent">
            <ul class="navbar-nav nav-ul" id="nav-ul">
            <li class="nav-item">
                <a class="nav-link li-navLink" data-target="home" aria-label="Home button">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link li-navLink" data-target="bookList" aria-label="Book List button">Book List</a>
              </li>
              <li class="nav-item">
                <a class="nav-link li-navLink" data-target="addBook" aria-label="Add Book button">Add Book</a>
              </li>
              <li class="nav-item">
                <a class="nav-link li-navLink" data-target="contact" aria-label="Contact button">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
    `;
    return headerDiv;
  }
}

export default Header;
