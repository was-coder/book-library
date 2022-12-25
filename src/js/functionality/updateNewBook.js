const updateNewBook = (updateBook) => {
  const bookUpdate = (updateBook) => {
    const { id, title, author } = updateBook;
    const row = document.createElement('tr');
    const titleColumn = document.createElement('td');
    const authorColumn = document.createElement('td');
    const removeColumn = document.createElement('td');
    const editColumn = document.createElement('td');
    const removeBtn = document.createElement('button');
    const editBtn = document.createElement('button');

    row.className = 'book';
    removeBtn.id = id;
    titleColumn.innerText = title;
    authorColumn.innerText = author;
    removeBtn.innerText = 'Remove';
    editBtn.innerText = 'Edit';
    removeBtn.className = 'remove-btn remove-edit';
    editBtn.className = `edit-btn ${id} remove-edit`;
    removeColumn.append(removeBtn);
    editColumn.append(editBtn);
    row.append(titleColumn, authorColumn, removeColumn, editColumn);
    return row;
  };

  const contentDiv = document.querySelector('.content-div');
  const fragment = document.createDocumentFragment();
  updateBook.forEach((element) => {
    fragment.prepend(bookUpdate(element));
  });
  contentDiv.appendChild(fragment);
};

export default updateNewBook;
