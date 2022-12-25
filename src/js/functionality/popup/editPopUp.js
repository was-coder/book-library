class EditSuccess {
  static getEditSuccess(updateBook) {
    const { title, author } = updateBook;
    const successSection = document.createElement('div');
    successSection.className = 'popup-container';
    successSection.innerHTML = `
        <div class="popup-background"
        <div class="popup">
        <h3 id="success-header">Book Edited Successfully</h3>
        <p class="success">The Book has been edited successfully to the title: "${title} by ${author}"</p>
        <button class="list-button button return-btn" data-target="bookList">Return to Book List</button>
        </div>
        </div>
        `;

    return successSection;
  }
}

export default EditSuccess;
