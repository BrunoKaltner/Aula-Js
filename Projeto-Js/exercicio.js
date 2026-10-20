//Saudação personalizada

// const nome = prompt("Olá, qual o seu nome?")

// alert(`olá ${nome}!`)




//Leia dois números, some e mostre com 2 casas decimais.

//**Exemplo:**entradas `10` e `5.5` → saída `A soma é 15.50

// const n1 = 10;
// const n2 = 5.5;
// const resultado = n1 + n2;

// alert(`O valor total é ${resultado.toFixed(2)}`)



//Converter centímetros para polegadas (1 in = 2,54 cm).

//Exemplo: entrada 254  saída 254 cm = 100.00 polegadas

// const centimetro = Number(prompt("Qual é a medida em (cm)?"))

// const polegada = centimetro / 2.54

// console.log(`${centimetro} cm = ${polegada.toFixed(2)} polegadas`)



//converter anos em meses, dias, horas e minutos (use 365 dias por ano como simplificação)

//Exemplo: entrada 20 → 240 meses, 7300 dias, 175200 horas e 10512000 minutos

const anos = Number(prompt("Digite sua idade em anos:"))

const meses = anos * 12

const dias = anos * 365

const horas = dias * 24

const minutos = horas * 60

console.log(`Idade informada: ${anos} anos:`)
console.log("-----------------------")
console.log(`${meses} meses`)
console.log(`${dias} dias`)
console.log(`${horas} horas`)
console.log(`${minutos} minutos`)