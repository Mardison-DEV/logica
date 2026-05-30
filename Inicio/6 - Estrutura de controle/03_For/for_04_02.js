// [1, 1], [1, 2], [1, 3]
// [2 ], [1, 2], [1, 3]
// [1, 1], [1, 2], [1, 3]

for (let a = 1; a <= 3; a++) {
    let linha = '';
        
        for (let b = 1; b <=3; b++) {
            linha += ` - [${a}, ${b}] - `;
        }
        console.log (linha);
}

console.log ('FIM!');