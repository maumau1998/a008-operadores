let pergunta1 = Number(prompt("Digite um número !!!"))
let pergunta2 = Number(prompt("Digite outro número novamente !!!"))

console.log ("O primeiro número é maior que o segundo?")
console.log(pergunta1 > pergunta2)

console.log("O primeiro número é igual ao segundo?")
console.log(pergunta1 === pergunta2)

console.log("O primeiro número é divisível pelo segundo?")
let soma= (pergunta1 % pergunta2 )
console.log(soma === pergunta2)


console.log("O segundo número é divisível pelo primeiro?")
console.log(soma === pergunta1)