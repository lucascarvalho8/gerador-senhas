const input = document.querySelector('input'); // Seleciona o campo de input
const btn = document.querySelector('a'); // Seleciona o botão de copiar

function generator(){
  let randomString = Math.random().toString(26).slice(-8); // Gera uma string aleatória com 8 caracteres
  input.value = randomString; // Exibe a string no input
}

function copy(){
  navigator.clipboard.writeText(input.value); // Copia o conteúdo do input para a área de transferência
  btn.classList.add('active'); // Adiciona a classe "active" para mostrar o balão "Copiado"
  setTimeout(function(){
    btn.classList.remove('active'); // Remove a classe após 2 segundos
    input.value = ''; // Limpa o campo de input
  },2000);
}
