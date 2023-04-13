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