document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // these IDs from the previous steps
    emailjs.sendForm('esh_fitness_email', 'template_yj6a114', this)
        .then(
            () => {
                alert("Email sent successfully! We will get back to you shortly.")
            },
            () => {
                alert("Sorry, something went wrong on our server. We are working on fixing it.")
            }
        );
});