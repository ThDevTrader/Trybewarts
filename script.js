const btnLogin = document.getElementById('btnLogin');
const login = document.getElementById('login');
const senha = document.getElementById('senha');

btnLogin.addEventListener('click', function () {
  if (login.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
});
