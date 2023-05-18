//RECURSIVIDADE

function fat (num){
    if (num == 1){
        return 1
    }else{
         return num * fat (num - 1)// recursividade - uma função que se chama 
    }
}

console.log (fat(4))
//linguagem funcional 