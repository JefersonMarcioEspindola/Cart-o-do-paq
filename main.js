function atualizarCracha() {
  const nome = document.getElementById('nome').value;
  const idade = document.getElementById('idade').value;
  const cargo = document.getElementById('cargo').value;
  const imagem = document.getElementById('image').files[0];

  const banner = document.getElementById('img-banner');

  const reader = new FileReader();
  reader.onload = function() {
    banner.src = reader.result;
  }
  reader.readAsDataURL(imagem);

  document.getElementById('nome-cracha').innerHTML = nome;
  document.getElementById('idade-cracha').innerHTML = idade;
  document.getElementById('cargo-cracha').innerHTML = cargo;
}


const themeSelect = document.getElementById('theme-select');
const cracha = document.querySelector('.card');

themeSelect.addEventListener('change', (event) => {
  const selectedTheme = event.target.value;
  cracha.classList = `card ${selectedTheme}`;
});

document.addEventListener("DOMContentLoaded", function() {
  const themeSelect = document.getElementById('theme-select');
  const cracha = document.querySelector('.card');
  cracha.classList.add('default');

  themeSelect.addEventListener('change', (event) => {
    const selectedTheme = event.target.value;
    cracha.classList = `card ${selectedTheme}`;
  });
});