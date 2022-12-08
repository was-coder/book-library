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
          At the Book Library, we are passionate about books and dedicated to helping you find the perfect one for your needs. Whether you are looking for a thrilling novel, a thought-provoking non-fiction book, or a classic work of literature, you will find it here.
        </p>
      </div>

      <div class="buttons">
        <a class="nav-link btn add-book-btn" data-target="addBook">Add Book</a>
        <a class="nav-link btn book-list-btn" data-target="bookList">Book List</a>
      </div>

      <h2 class="text-center featured">Featured Books</h2>
      <p class="description">Books that will be featured are in the form of book's title and author's name. Samples are given below:</p>      
      <div class="book-list">
        <div class="book-item">
          <h3>The Great Gatsby</h3>
          <p>by F. Scott Fitzgerald</p>
        </div>
        <div class="book-item">
          <h3>The Catcher in the Rye</h3>
          <p>by J.D. Salinger</p>
        </div>
        <div class="book-item">
          <h3>To Kill a Mockingbird</h3>
          <p>by Harper Lee</p>
        </div>
      </div>
    `;
    return homeSection;
  }
}

export default Home;
