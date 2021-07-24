const btnLogin = document.getElementById('btnLogin');
const login = document.getElementById('login');
const senha = document.getElementById('senha');
const btnSubmit = document.getElementById('submit-btn');
const check = document.getElementById('agreement');
const text = document.querySelector('#textarea');

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

text.addEventListener('keyup', (event) => { //seguindo instruções da página: https://www.horadecodar.com.br/2020/12/09/contador-de-caracteres-em-uma-textarea-com-javascript/
  const textLength = text.value.length;     //com o uso de "keypress" o valor não decrementava. "keydown" impedia o uso de backspace e travou a digitação ao final
  const maxCharacters = 500;                //então, seguindo ideias deste video: https://www.youtube.com/watch?v=0X12LKGWcmE&ab_channel=LucasSilva
  const left = maxCharacters - textLength;  //e da página https://api.jquery.com/keypress/ o "keyup" resolveu o problema
  const counter = document.querySelector('#counter');
  counter.innerHTML = left;
  if (textLength >= maxCharacters){
    event.preventDefault();
  }
})
