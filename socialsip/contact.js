const contactForm = document.getElementById('contact-form');
const responseDiv = document.getElementById('response');

contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Here, you can send the form data to your server or handle it as needed.
    // For this example, we'll just display a message.
    responseDiv.innerHTML = `Thank you, ${name}! We have received your message and will get back to you at ${email} as soon as possible.`;
    responseDiv.classList.remove('hidden');

    // Clear the form
    contactForm.reset();
});
