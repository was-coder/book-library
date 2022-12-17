class EditSuccess {
  static getEditSuccess(updateBook) {
    const { title, author } = updateBook;
    const successSection = document.createElement('div');
    successSection.className = 'success-container';
    successSection.innerHTML = `
        <div class="success-background"
        <div class="success">
        <h3 id="success-header">Book Edited Successfully</h3>
        <p class="successful">The Book has been edited successfully to the title: "${title} by ${author}"</p>
        <button class="list-button button" data-target="bookList">Return to Book List</button>
        </div>
        </div>
        `;

    return successSection;
  }
}

export default EditSuccess;
