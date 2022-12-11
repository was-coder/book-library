class Contact {
  static getContact() {
    const contactSection = document.createElement('section');
    contactSection.className = 'container home contact';
    contactSection.innerHTML = `
    <h2 class="text-center pb-5 contact-info">Contact Information</h2>
    <div class="text-center">
    <p class="contact-description">Do you have any questions or you just want to say "Hello"? You can reach out to us!</p>
    <div class="contact-ul-div">
    <ul>
    <li>Our E-mail: <span class="list-span">     adelakunwasiu1000@gmail.com</span></li>
    <li>Our Phone number: <span class="list-span">Let's keep it hidden</span></li>
    <li>Our Address: <span class="list-span">Adekeye Street, Off Ojo Road, Lagos Nigeria</span></li>
    </ul>
    </div>
    </div>
`;
    return contactSection;
  }
}

export default Contact;
