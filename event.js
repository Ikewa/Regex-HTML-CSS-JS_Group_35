document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let isValid = true;

    // Name validation
    const name = document.getElementById('name').value;
    const nameError = document.getElementById('nameError');
    const nameRegex = /^[a-zA-Z\s]+$/;
    if (!nameRegex.test(name)) {
        isValid = false;
        nameError.textContent = 'Please enter a valid name (letters and spaces only).';
    } else {
        nameError.textContent = '';
    }

    // Email validation
    const email = document.getElementById('email').value;
    const emailError = document.getElementById('emailError');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        isValid = false;
        emailError.textContent = 'Please enter a valid email address.';
    } else {
        emailError.textContent = '';
    }

    // Phone validation
    const phone = document.getElementById('phone').value;
    const phoneError = document.getElementById('phoneError');
    const phoneRegex = /^\(\d{3}\) \d{3}-\d{4}$/;
    if (!phoneRegex.test(phone)) {
        isValid = false;
        phoneError.textContent = 'Please enter a valid phone number (format: (123) 456-7890).';
    } else {
        phoneError.textContent = '';
    }

    // Event date validation
    const eventDate = document.getElementById('eventDate').value;
    const eventDateError = document.getElementById('eventDateError');
    const eventDateRegex = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}$/;
    if (!eventDateRegex.test(eventDate)) {
        isValid = false;
        eventDateError.textContent = 'Please enter a valid date (format: MM/DD/YYYY).';
    } else {
        eventDateError.textContent = '';
    }

    // Tickets validation
    const tickets = document.getElementById('tickets').value;
    const ticketsError = document.getElementById('ticketsError');
    if (tickets < 1 || tickets > 10) {
        isValid = false;
        ticketsError.textContent = 'Please enter a number of tickets between 1 and 10.';
    } else {
        ticketsError.textContent = '';
    }

    if (isValid) {
        alert('Registration successful!');
        // You can add form submission logic here, e.g., sending data to a server
        document.getElementById('registrationForm').reset();
    }
});
