import * as cartService from "./services/cart.js"
import createItem from "./services/itens.js";
import chalk from "chalk";

const myCart = [];


console.log(chalk.bgYellow("🛒 Bem-vindo ao seu carrinho de compras!"))

//criação dos itens que serão adicionados no carrinho
const item1 = await createItem("Boné Nike", 259.90, 2, true);
const item2 = await createItem("Camiseta Nike air", 110.90, 2, false);
const item3 = await createItem("Nike tech fleece - black", 350.00, 1, true);
const item4 = await createItem("Air max 95 white", 880.99, 1, false);


// adicionado 2 itens ao carrinho
await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);
await cartService.addItem(myCart, item3);
await cartService.addItem(myCart, item4);

await cartService.removeItem(myCart, item2); //remove 1 quantidade do item escolhido para remoção

//deletando dois itens do carrinho
// await cartService.deleteItem(myCart, item1.name);
// await cartService.deleteItem(myCart, item2.name);

await cartService.displayCart(myCart); // mostra o carrinho
await cartService.displayFavorites(myCart); // mostra os itens favoritos do carrinho

console.log(chalk.yellow("\nO total do seu carrinho é de:"))
await cartService.calculateTotal(myCart);