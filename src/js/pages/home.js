class Home {
  static getHome() {
    const homeSection = document.createElement('section');
    homeSection.className = 'container home home-container';
    homeSection.innerHTML = `
      <div class="banner">
        <h1 class="banner-title">Welcome to Awesome Library!</h1>
      </div>

      <div class="description">
        <p>
          At the Book Library, we are passionate about books and dedicated to helping you organize your books and find books easily. Whether you are looking for a thrilling novel you have read, a thought-provoking non-fiction book, or a classic work of literature, you will find it in your book library.
        </p>
      </div>

      <div class="buttons">
        <a class="nav-link btn btn-book" data-target="addBook">Add Book</a>
        <a class="nav-link btn btn-book" data-target="bookList">Book List</a>
      </div>

      <h2 class="text-center featured">Featured Books</h2>
      <p class="description">Books that will be featured are in the form of book's title and author's name. Samples are given below:</p>      
      <div class="book-list">
        <div class="book-item">
          <h3>Things Fall Apart</h3>
          <p>by Chinua Achebe</p>
        </div>
        <div class="book-item">
          <h3>The Lion and the Jewel</h3>
          <p>by Wole Soyinka</p>
        </div>
        <div class="book-item">
          <h3>Shall I compare thee to a summer day</h3>
          <p>by William Shakespare</p>
        </div>
      </div>
    `;
    return homeSection;
  }
}

export default Home;
