class BookList {
  static getBookList() {
    const tableSection = document.createElement('section');
    tableSection.className = 'container home';
    tableSection.id = 'list';

    // Create the table header
    const tableHeader = document.createElement('h2');
    tableHeader.className = 'text-center pb-5';
    tableHeader.textContent = 'List of Awesome Books';

    // Create the table element
    const tableElement = document.createElement('table');
    tableElement.className = 'table table-striped table-hover';

    // Create the table header row
    const tableHeaderRow = document.createElement('tr');
    tableHeaderRow.innerHTML = `
      <th class="th-sm">Title</th>
      <th class="th-sm">Author</th>
      <th class="th-sm"></td>
    `;

    // Create the table body
    const tableBody = document.createElement('tbody');
    tableBody.className = 'content-div';

    // Append the header row to the table element
    tableElement.appendChild(tableHeaderRow);

    // Append the table body to the table element
    tableElement.appendChild(tableBody);

    // Append the table header and the table element to the table section
    tableSection.appendChild(tableHeader);
    tableSection.appendChild(tableElement);

    // Return the table section
    return tableSection;
  }
}

export default BookList;
