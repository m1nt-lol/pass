// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Get the submit button and attach the event listener
    const submitButton = document.getElementById('submitButton');
    submitButton.addEventListener('click', validatePassword);
    
    // Function to validate password
    function validatePassword() {
        const passwordInput = document.getElementById('password').value;
        const loginForm = document.getElementById('loginForm');
        const contentHello = document.getElementById('contentHello');
        const contentHello1 = document.getElementById('contentHello1');
        const errorMessage = document.getElementById('error-message');

        // Hide all content by default
        contentHello.style.display = 'none';
        contentHello1.style.display = 'none';
        errorMessage.style.display = 'none';

        // Check the entered password
        if (passwordInput === 'hello') {
            // If "hello", show the first content and hide the login form
            loginForm.style.display = 'none';
            contentHello.style.display = 'block';
        } else if (passwordInput === 'hello1') {
            // If "hello1", show the second content and hide the login form
            loginForm.style.display = 'none';
            contentHello1.style.display = 'block';
        } else {
            // Incorrect password, show the error message
            errorMessage.textContent = 'Incorrect password. Please try again.';
            errorMessage.style.display = 'block';
        }
    }
});
