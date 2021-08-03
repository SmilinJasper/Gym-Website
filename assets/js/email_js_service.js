/* contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    emailjs.sendForm("esh_fitness_email", "template_yj6a114", this)
        .then(function() {
            alert("Email Sent! I will get back to you soon");
        }, function() {
            alert("Failed to send email, report issue to me please");
        });
});*/

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // these IDs from the previous steps
    emailjs.sendForm('esh_fitness_email', 'template_yj6a114', this)
        .then(function() {
            alert("Email Sent! I will get back to you soon");
        }, function() {
            alert("Failed to send email, report issue to me please");
        });
});