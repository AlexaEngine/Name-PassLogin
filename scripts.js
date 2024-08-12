document.addEventListener("DOMContentLoaded", function() {
    document
        .getElementById("myForm")
        .addEventListener("submit", function(event) {
            // Reset error messages
            document.getElementById("nameError").innerHTML = "";
            document.getElementById("emailError").innerHTML = "";
            // Get form values
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            // Validate name
            if (name === "") {
                document.getElementById("nameError").innerHTML = "Name is required.";
                event.preventDefault(); // Prevent form submission
            }
            // Validate email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                document.getElementById("emailError").innerHTML = "Invalid email address.";
                event.preventDefault(); // Prevent form submission
            }
        });
});
