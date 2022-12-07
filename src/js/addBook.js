class AddBook {
  static getBookAdded() {
    const addBookSection = document.createElement('section');
    addBookSection.className = 'container home';
    addBookSection.id = 'add';
    addBookSection.innerHTML = `
    <h2 class="text-center pb-5">Add new Awesome Books</h2>
      <form class="form" id="form">
      <label for="title" class="sr-only">Title</label>
      <div class="form-group">
          <input
            type="text"
            name="title"
            placeholder="Title"
            required
            class="form-control book-input title"
          />
        </div>

        <div class="form-group">
          <label for="author" class="sr-only"></label>
          <input
            type="text"
            name="author"
            placeholder="Author"
            required
            class="form-control book-input author"
          />
        </div>

        <button type="submit" id="add-btn" class="btn text-capitalize">add book</button>
      </form>
`;
    return addBookSection;
  }
}

export default AddBook;
