
const produtos = {
    nome:"Celular",
    preco: 5600,
    desconto: 0.15,

    preco_Com_Desconto: function(){
        return produtos.preco * (1 - produtos.desconto); // => poderia ser: return this.preco * (1 - this.desconto); 
    }


};

console.log (produtos.nome);
console.log (`O preço normal é: ${produtos.preco}`);
console.log (`O preço com desconto: ${produtos.preco_Com_Desconto()}`)
console.log (`Valor do desconto: ${produtos.preco - produtos.preco_Com_Desconto()}`);
 