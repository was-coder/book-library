class BookList {
  static getBookList() {
    const tableSection = document.createElement('section');
    tableSection.className = 'container home';

    // Create the table header
    const tableHeader = document.createElement('h2');
    tableHeader.className = 'text-center pb-5 tableHeader';
    tableHeader.textContent = 'List of Awesome Books';

    // Create the table element
    const tableElement = document.createElement('table');
    tableElement.className = 'table table-striped table-hover';

    // Add some style to the table element
    tableElement.style.borderCollapse = 'collapse';
    tableElement.style.width = '100%';
    tableElement.style.paddingLeft = '20px';
    tableElement.style.paddingRight = '20px';

    // Create the table header row
    const tableHeaderRow = document.createElement('tr');
    tableHeaderRow.className = 'tableHeader';
    tableHeaderRow.innerHTML = `
      <th class="th-sm">Title</th>
      <th class="th-sm">Author</th>
      <th class="th-sm"></th>
    `;

    // Add some style to the table header cells
    const tableHeaderCells = tableHeaderRow.querySelectorAll('th');
    tableHeaderCells.forEach((cell) => {
      cell.style.textAlign = 'left';
      cell.style.paddingTop = '12px';
      cell.style.paddingBottom = '12px';
      cell.style.backgroundColor = '#4caf50';
      cell.style.color = 'white';
    });

    // Create the table body
    const tableBody = document.createElement('tbody');
    tableBody.className = 'content-div';

    tableElement.appendChild(tableHeaderRow);
    tableElement.appendChild(tableBody);
    tableSection.appendChild(tableHeader);
    tableSection.appendChild(tableElement);

    return tableSection;
  }
}

export default BookList;
