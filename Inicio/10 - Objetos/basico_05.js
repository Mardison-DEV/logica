const cliente = {
     nome: "Mardison Barbosa",
    email: "mark@gmail.com",
      cel: "11960633525",
      vip: true,

      endereco:{
    rua:'Rua: Amado Brasil',
    numero: 'Número: 201',
    cep: 'CEP: 011-44010',
    ponto_Ref: [
        "Hospital Clero",
        "IronBarg",
        "Ponto Banca"

    ]

    }


};


console.log(cliente.nome);
console.log(cliente.email);
console.log(cliente.cel);
console.log(cliente.endereco.rua);
console.log(cliente.endereco.numero);
console.log(cliente.endereco.cep);
console.log(`O ponto de referência é: ${cliente.endereco.ponto_Ref[2]}`);


