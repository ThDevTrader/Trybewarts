const btnLogin = document.getElementById('btnLogin');
const login = document.getElementById('login');
const senha = document.getElementById('senha');
const btnSubmit = document.getElementById('submit-btn');
const check = document.getElementById('agreement');

btnLogin.addEventListener('click', () => {
  if (login.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
});

check.addEventListener('click', (event) => {
  if (event.target.classList.contains('activateButton')) { // dica da Gi durante monitoria
    event.target.classList.remove('activateButton');
    btnSubmit.disabled = true;
  } else {
    event.target.classList.add('activateButton');
    btnSubmit.disabled = false;
  }
});
