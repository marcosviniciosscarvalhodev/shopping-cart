// CASOS DE USO DOS ITENS

// criar item com subtotal certo
async function createItem(name, price, quantity, favorite){
    return{ //objetos
        name,
        price,
        quantity,
        favorite,
        subtotal: () => price * quantity, //funcao de calculo do subtotal do item
        taxaEntrega: () => (price * quantity) * 0.05
    }
}

export default createItem;