function Criar_Data (dia, mes , ano){
    return {

    dia,
    mes,
    ano,

    exibir() {
        return (`A data de hoje é: ${this.dia}/${this.mes}/${this.ano}`);
}
};
}


const d1 = Criar_Data(9,10,24);
const d2 = Criar_Data(29,2,24);
const d3 = Criar_Data(31,5,88);

console.log (d1.exibir());
console.log (d2.exibir());
console.log (d3.exibir());