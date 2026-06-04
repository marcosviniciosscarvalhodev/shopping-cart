<h1>🛒 Shopping Cart - Carrinho de compras</h1>

Um sistema de carrinho de compras desenvolvido em Node.js, simulando funcionalidades essenciais de um e-commerce diretamente pelo terminal.

<h2>📖 Sobre o projeto</h2>

Este projeto foi criado com o objetivo de praticar conceitos fundamentais de desenvolvimento backend utilizando JavaScript e Node.js.

A aplicação permite criar produtos, adicionar itens ao carrinho, remover quantidades, excluir produtos e calcular automaticamente o valor total da compra.

<h2>🚀 Tecnologias utilizadas</h2>
Node.js <br>
JavaScript <br>
ESModules

---

<h2>⚙️ Funcionalidades</h2>
📦 Criação de produtos <br>
createItem(name, price, quantity)

Permite criar um novo produto com: <br>
Nome <br>
Preço <br>
Quantidade <br>

<h3>➕ Adicionar itens ao carrinho</h3>
<b>addItem()</b> <br>
Adiciona um produto ao carrinho.

<h3>➖ Remover quantidade de um item</h3>
<b>removeItem()</b> <br>
Remove uma unidade do produto selecionado.

<h3>❌ Excluir produto do carrinho</h3>
<b>deleteItem()</b> <br>
Remove completamente um produto do carrinho.

<h3>💖 Lista de favoritos</h3>
<b>displayFavorites()</b> <br>
Exibe apenas os itens marcados como favoritos no carrinho, filtrando os produtos com <code>favorite = true</code>.

<h3>🚚 Taxa de frete</h3>
Cada item possui uma taxa de frete de 5% sobre o valor do produto.

O cálculo é feito automaticamente e adicionado ao valor final da compra.

<h3>📋 Exibir carrinho</h3>
<b>displayCart()</b> <br>
Lista todos os produtos presentes no carrinho.

<h3>💰 Calcular total da compra</h3>
<b>calculateTotal()</b> <br>
Calcula automaticamente o valor total dos itens.

----

<h2>▶️ Como executar</h2>

Clone o repositório: <br> 
git clone https://github.com/marcosviniciosscarvalhodev/shopping-cart.git

Acesse a pasta:

cd shopping-cart

Execute a aplicação:

node src/index.js <br>

---

<h2>🧠 Conceitos praticados</h2>
<ul>
<li>Modularização de código </li>
<li>ES Modules</li>
<li>Manipulação de Arrays</li>
<li>Objetos em JavaScript</li>
<li>Funções reutilizáveis</li>
<li>Organização de projetos Node.js</li>
<li>Lógica de negócios para e-commerce</li>
</ul>

---

<h2>🎯 Objetivos do projeto</h2>
Simular operações de um carrinho de compras <br>
Aplicar boas práticas de organização de código <br>
Exercitar lógica de programação <br>
Aprender modularização com Node.js<br>

---


👨‍💻 Autor <br>
Desenvolvido por Marcos Vinicios, desafio inspirado na proposta do curso da DIO.