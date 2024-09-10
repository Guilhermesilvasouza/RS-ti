console.log("Hello, World");
const readline = require('readline');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question('Escreva seu nome: ',(nome) => {
    console.log(`Ola, ${nome}!`);
    rl.close();
})


rl.question('Informe seu nome: ', (nome) => {
    rl.question('Informe seu salário:  ', (salario) => {
        console.log (`O ${nome} recebe R$${salario} por mês.`)

        rl.close()
    })
})


