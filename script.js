document.getElementById('loginButton').addEventListener('click', async () => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Fetching login info from JSON
    const response = await fetch('login.json');
    const data = await response.json();

    // Checking if username and password match
    const user = data.users.find(user => user.username === username && user.password === password);

    if (user) {
        alert('Login successful!');
        // Redirect or perform further actions here
    } else {
        alert('Invalid username or password');
    }
});
