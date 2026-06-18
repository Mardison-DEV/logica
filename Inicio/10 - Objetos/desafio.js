

const data_01 = {
    dia: "31",
    mes: "05",
    ano: "2026",

    exibir: function() {
        return (`A data de hoje é: ${this.dia}/${this.mes}/${this.ano}`);
    }
};

const data_02 = {
    dia: "23",
    mes: "09",
    ano: "2029",

    exibir: function() {
        return (`A data do casamento: ${this.dia}/${this.mes}/${this.ano}`);
    }
};

const data_03 = {
    dia: "13",
    mes: "12",
    ano: "2023",

    exibir: function() {
        return (`A data de aniverário de mãe: ${this.dia}/${this.mes}/${this.ano}`);
    }
};

console.log (data_01.exibir())
console.log (data_02.exibir())
console.log (data_03.exibir())