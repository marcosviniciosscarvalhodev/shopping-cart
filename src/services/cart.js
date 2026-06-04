// quais ações meu carrinho pode fazer

// CASOS DE USO
// adicionar
async function addItem(userCart, item) { //vetor puxando parâmetros
    userCart.push(item);
}
// calcular total do carrinho
async function calculateTotal(userCart) {
    const result = userCart.reduce((total, item, frete) => total + item.subtotal() + item.taxaEntrega(), 0) //reduce faz interagir com todos os itens e faz uma ação com cada um dos itens que tem dentro
    console.log(`🎁 - Total: ${result.toFixed(2)}`)
}
//  remover item
async function removeItem(userCart, item) {
    //1. encontrar o indice do item
    const indexFound = userCart.findIndex((p) => p.name === item.name) //findindex permite olhar o item dentro de uma condição

    //2. caso não encontre o item
    if (indexFound == -1) {
        console.log("Item não encontrado");
        return;
    }
    //3. item > 1 (subtrair um item) 
    if (userCart[indexFound].quantity > 1) {
        userCart[indexFound].quantity -= 1
        return
    }
    //4. Caso item = 1 (deletar o item)
    if (userCart[indexFound].quantity == 1) {
        userCart.splice(indexFound, 1);
        return
    }
}

// deletar item
async function deleteItem(userCart, name) {
    const index = userCart.findIndex((item) => item.name === name) //findindex pega o index do vetor em que o item se encontra
    if (index !== -1) {
        userCart.splice(index, 1) //splice corta
    }
}

async function displayCart(userCart) {
    console.log("Itens na lista do carrinho: \n");
    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - Preço: R$ ${item.price} - Quantidade: ${item.quantity} - Favorito?(${item.favorite}) - Subtotal: R$ ${item.subtotal()}`)
        // taxa entrega
        console.log(`🚐 - Taxa de entrega: R$${item.taxaEntrega().toFixed(2)}`)
    })
}
async function displayFavorites(userCart){
    console.log("\nItens favoritos na sua lista do carrinho: \n")
const favoriteItems = userCart.filter((item) => {
    return item.favorite;
})
if (favoriteItems.length === 0) { //caso não haja itens favoritos
        console.log("Nenhum item favorito encontrado.");
        return;
    }

    favoriteItems.forEach((item, index) => { // percorre a lista
        console.log(
            `${index + 1}. ${item.name} - Preço: R$ ${item.price} - Quantidade: ${item.quantity} - Subtotal: R$ ${item.subtotal()}`
        );
        // taxa entrega
        console.log(`🚐 - Taxa de entrega: R$${item.taxaEntrega()}`)
    });
    const resultFavorite = favoriteItems.reduce((total, item, frete) => total + item.subtotal() + item.taxaEntrega(), 0) //reduce faz interagir com todos os itens e faz uma ação com cada um dos itens que tem dentro
    console.log(`🎁 - Total: ${resultFavorite.toFixed(2)}`)
}

export {
    addItem,
    calculateTotal,
    deleteItem,
    removeItem,
    displayCart,
    displayFavorites,
}
