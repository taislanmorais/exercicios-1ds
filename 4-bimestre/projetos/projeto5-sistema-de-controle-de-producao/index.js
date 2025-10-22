// Antes de iniciar, instale o prompt-sync para entrada de dados e o jest para testar
// Comando: npm i prompt-sync; npm i -D jest

// CRIE UMA LÓGICA ABAIXO
const prompt = require("prompt-sync")()

let contador = 0
let objetivo
let repetir
let acumulado = 0
let registro = ""

do {
    do {
        objetivo = parseInt(prompt("quantas peças devem ser produzidas nesse turno?: "))
    } while (typeof objetivo !== 'number' || objetivo !== objetivo)

    let producao = 0

    while (producao < objetivo) {
        producao++
        console.log(`Peça ${producao}, produzida com sucesso`)
    }

    if (producao === objetivo) {
        console.log("Meta alcançada!")
    } else {
        console.log("meta não alcançada!")
    }

    for (let i = 1; i > 0; i--) {
        contador++
        const linha = `Dia ${contador} foi produzido ${objetivo}\n`
        registro += linha
        acumulado = objetivo + acumulado
    }

    do {
        repetir = prompt("Deseja simular outro turno? S/N: ").toUpperCase()
    } while (repetir === "" || repetir === null)

} while (repetir == "S")
console.log("Resumo dos dias anteriores:")
console.log(registro)
console.log(`Total geral: ${acumulado} peças fabricadas!`)
console.log("Encerrando sistema de produção")