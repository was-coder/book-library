class Contact {
  static getContact() {
    const contactSection = document.createElement('section');
    contactSection.className = 'container home contact';
    contactSection.innerHTML = `
    <h2 class="text-center pb-5">Contact</h2>      
`;
    return contactSection;
  }
}

export default Contact;
