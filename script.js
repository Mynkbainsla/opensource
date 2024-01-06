function validateLogin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Perform your login validation logic here
    // For simplicity, let's assume the login is successful if both fields are non-empty
    if (username && password) {
        // Redirect to a specific page (you can replace 'specific-page.html' with the actual page URL)
        window.location.href = 'home.html';
    } else {
        alert('Please enter both username and password.');
    }
}
