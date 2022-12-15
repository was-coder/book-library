class NewBookAdded {
  static updateBookAdded(newBook) {
    const { title, author } = newBook;
    const successSection = document.createElement('div');
    successSection.className = 'success-container';
    successSection.innerHTML = `
      <div class = "success-background"
      <div>
      <h3 id="success-header">New Book Added</h3>
      <p class="successful">The Book titled: "${title} by ${author}" has been added successfully</p>
      <div class="success-btn">
      <button class="list-button button  pop-btn" id="list" data-target="bookList">Return to Book List</button>
      <button class="addNewBook-button button pop-btn">Add More Book</button>
      </div>
      </div>
      </div>
      `;

    return successSection;
  }
}

export default NewBookAdded;
