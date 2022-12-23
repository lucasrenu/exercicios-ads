let stringPrimaria = 'abcd*efg-hkw+'
let operadores = ['-', '+', '*', '/']
let expressoes = []

/*
    Fazer com que ele funcione em qualquer tamanho de string, exemplo:
    entrada> abcd*efg+
    saída> a*b*c*d, e+f+g

    Refatorar e adicionar operação entre elementos
    Exemplo 2:
    entrada> abcd*efg+-
    saída> a*b*c*d - e+f+g
*/

let n = 0

for(let j = 0; j < stringPrimaria.length; j++){
    for(let i = 0;  i < 4; i++){
        let auxString = ''
        if (stringPrimaria[j] == operadores[i]){
            for(n; n < j; n++){
                let atual = stringPrimaria[n]
                if(!( atual == '-' || atual == '+' || atual == '*' || atual == '/')){
                    auxString += stringPrimaria[n]
                    if (n < j - 1)
                        auxString += operadores[i]
                }
            }
            if (auxString != '') expressoes.push(auxString)
        }
    }
}
console.table(expressoes);