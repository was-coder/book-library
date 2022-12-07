class NewBookAdded {
  static updateBookAdded(newBook) {
    const { title, author } = newBook;
    const successSection = document.createElement('div');
    successSection.className = 'success-container';
    successSection.innerHTML = `
      <div class = "success-background"
      <div class = "success">
      <h3 id="success-header">New Book Added Successfully</h3>
      <p class = "success-author" >${author}</p>
      <p>${title} has been added successfully</p>
      <button class="list-button button" id="list" data-target="bookList">Return to Book List</button>
      <button class="addNewBook-button button">Add More Book</button>
      </div>
      </div>
      `;

    return successSection;
  }
}

export default NewBookAdded;
