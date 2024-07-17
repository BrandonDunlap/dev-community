document.querySelector('#login-form').addEventListener('submit', async (event) => {
  event.preventDefault();

  const username = document.querySelector('#username-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (username && password) {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      const result = await response.json();
      console.error('Login failed:', result);
      alert('Failed to log in. Please check your credentials and try again.');
    }
  }
});
