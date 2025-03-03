document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();
    document.getElementById('emailError').textContent = '';

    const email = document.getElementById('email').value;
    const confirmEmail = document.getElementById('confirmEmail').value;
    if (email !== confirmEmail) {
        document.getElementById('emailError').textContent = 'Email addresses do not match.';
    } else {
        alert('Form submitted successfully.');
    }
});
