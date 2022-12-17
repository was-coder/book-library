class EditBook {
  static getBook() {
    const editSection = document.createElement('div');
    editSection.className = 'success-container';
    editSection.innerHTML = `
        <div class='success-background'>
        <div class="cancel-div">
            <button class="cancel-btn"><i class="fa-solid fa-2x fa-xmark"></i></button>
            </div>
            <h1>Edit Books</h1>
            <form class="form form-edit" id="form">
                <label for="title" class="sr-only">Title</label>
                <div class="form-group">
                    <input
                type="text"
            name="title"
            placeholder="Title"
            required
            class="form-control book-input title edit-input"
          />
        </div>

        <div class="form-group">
          <label for="author" class="sr-only"></label>
          <input
            type="text"
            name="author"
            placeholder="Author"
            required
            class="form-control book-input author edit-input"
          />
        </div>

        <button type="submit" id="add-btn" class="btn edit-btn update-btn text-capitalize">Update Book</button>
        </form>
          </div>
`;
    return editSection;
  }

  static EditForm(formEdit) {
    const { title, author } = formEdit;
    const titleInput = document.querySelector('.title');
    const authorInput = document.querySelector('.author');
    titleInput.value = title;
    authorInput.value = author;
  }
}

export default EditBook;
