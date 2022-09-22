let pizzas = ['4queijos', 'Calabresa', 'Marguerita'];

pizzas[3] = 'Frango com catupiry';

pizzas.push('Strognoff de frango');
pizzas.push('strogonoff de carne');

console.log(pizzas)


console.log(pizzas.length)

// atribui uma variavel igual a 0' que ela vai rodar enquanto o index for menor que pizzas.length; vamos incrementar no index +1
for (let index = 0; index < pizzas.length; index += 1){
// apos cumprir os requisitos da linha de cima o nosso console.log vai gerar o pizza    
    console.log(pizzas[index]);
}