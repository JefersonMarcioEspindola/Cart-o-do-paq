function atualizarCracha() {
    const nome = document.getElementById("nome").value;
    const idade = document.getElementById("idade").value;
    const cargo = document.getElementById("cargo").value;
    const imagem = document.getElementById("image").value;
  
  
    const foto = document.getElementById("foto");
    const nomeCracha = document.getElementById("nome-cracha");
    const idadeCracha = document.getElementById("idade-cracha");
    const cargoCracha = document.getElementById("cargo-cracha");
  
    // atualiza os elementos do crachá com os valores dos campos de entrada
    nomeCracha.textContent = nome;
    idadeCracha.textContent = idade;
    cargoCracha.textContent = cargo;
    
  
    // verifica se foi selecionado um arquivo e atualiza a foto do crachá com o arquivo
    const arquivo = document.querySelector('input[type=file]').files[0];
    if (arquivo) {
      const reader = new FileReader();
      reader.onload = function() {
        foto.src = reader.result;
      }
      reader.readAsDataURL(arquivo);
    }
}