function showDetails(button) {
  // Seleciona o elemento com a classe "details" que está em display block
  var details = document.querySelector('.details[style*="display: block"]');

  // Exibe o elemento selecionado
  if (details) {
    details.style.display = "none";
  }

  // Seleciona o elemento "details" correspondente ao botão clicado
  var targetDetails = button.nextElementSibling;

  // Exibe o elemento "details" selecionado
  targetDetails.style.display = "block";
}

  // Função que adiciona o produto ao carrinho

function adicionarAoCarrinho() {
  const botoesAddCar = document.querySelectorAll('.add-car');

  botoesAddCar.forEach((botao) => {
    botao.addEventListener('click', () => {
      const produto = botao.parentNode;
      const titulo = produto.querySelector('h2').textContent;
      const preco = produto.querySelector('.valor-product span:first-child').textContent;
      
      const novoItemCarrinho = document.createElement('div');
      novoItemCarrinho.classList.add('cart-item');
      novoItemCarrinho.innerHTML = `
        <span class="item-title">${titulo}</span>
        <span class="item-price">${preco}</span>
      `;

      const carrinho = document.querySelector('.cart');
      carrinho.appendChild(novoItemCarrinho);
    });
  });
}

 // Exibe a quantidade de produtos adicionado ao carronho


  
  const addCarButtons = document.querySelectorAll('.add-car');
let quantidadeProdutos = 0;

function exibirQuantidadeCarrinho() {
  const quantidadeCarrinho = document.getElementById("quantidade-carrinho");
  quantidadeCarrinho.textContent = `${quantidadeProdutos}`;
}

addCarButtons.forEach(button => {
  button.addEventListener('click', () => {
    quantidadeProdutos++;
    exibirQuantidadeCarrinho();
  });
});

  // Remove os itens do carrinho
  
const removeButton = document.querySelector('#remove-car');

removeButton.addEventListener('click', () => {
  if (quantidadeProdutos > 0) {
    quantidadeProdutos--;
    exibirQuantidadeCarrinho();
  }
});
