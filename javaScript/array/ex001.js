let num = [8,4,0]
num [3] = 5
num.push (7) // colocar o elemento na ultima posição
num.length // mostra o tamanho do array
console.log (`O vetor antes de ordenar ${num}`)
num.sort() // coloca os elementos em ordem crescente 
console.log (`O vetor depois de ser colocado em ordem crescente ${num}`)
console.log (`Nosso vetor tem tamanho ${num.length} `)

/*
for (let i = 0; i < num.length; i ++){
    console.log (`A posição ${i + 1} tem o valor: ${num [i]}`)
}
*/
for ( let i in num){
    console.log (`A posição ${i} tem o valor: ${num [i]}`)
}

let pos = num.indexOf(0) //retorna a posição onde o valor está 
if (pos == 5){
    console.log ("O valor não foi encontrado!")

}else {
    console.log (`O valor foi encontrado na posição ${pos}`)
}