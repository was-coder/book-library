class NewBookAdded {
  static updateBookAdded(newBook) {
    const { title, author } = newBook;
    const successSection = document.createElement('div');
    successSection.className = 'popup-container';
    successSection.innerHTML = `
      <div class = "popup-background"
      <div>
      <h3 id="popup-header">New Book Added</h3>
      <p class="success">The Book titled: "${title} by ${author}" has been added successfully.</p>
      <div class="success-btn">
      <button class="list-button button pop-btn" id="list" data-target="bookList">Return to Book List</button>
      <button class="addNewBook-button button pop-btn">Add More Book</button>
      </div>
      </div>
      </div>
      `;

    return successSection;
  }
}

export default NewBookAdded;
