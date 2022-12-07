class Footer {
  static getFooter() {
    const footerDiv = document.createElement('div');
    footerDiv.className = 'footer';
    footerDiv.id = 'footer';
    footerDiv.innerHTML = `
    <footer>
        <div class="container footer-div">
        <h5>Copywrite &copy; <a href="https://www.github.com/was-coder">Abdul Wasiu</a></h5>
        </div>
    </footer>
    `;

    return footerDiv;
  }
}

export default Footer;
