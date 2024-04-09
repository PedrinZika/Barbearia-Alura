document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    if (username === 'teste' && password === 'professor') {
      // Login successful, redirect or do something else
      alert('Login bem-sucedido!');
    } else {
      // Login failed, display error message
      document.getElementById('error-msg').innerText = 'Usuário ou senha incorretos.';
    }
  });
  