class Pilha{
    vetor = []

    adicionar(elemento){
        this.vetor.push(elemento)
    }

    empilhar(elemento){
        this.vetor[this.vetor.length] = elemento;
    }

    remover(){
        this.vetor.pop()
    }

    desempilhar(){
        if(this.vetor.length > 0){
            this.vetor.splice(this.vetor.length - 1, 1)
        }
    }

    peek(){
        return this.vetor[this.vetor.length-1]
    }

    isEmpty(){
        return this.vetor.length == 0
    }

    size(){
        return this.vetor.length
    }

    clear(){
        this.vetor = []
    }

    print(){
        this.vetor.forEach(elemento => {console.log(elemento)})
    }
}

let p = new Pilha()
p.empilhar('primeiro')
p.empilhar('segundo')
p.empilhar('terceiro')
p.empilhar('quarto')
console.log("Elemento do topo: "+p.peek())
p.remover()
console.log("Novo elemento do topo: " + p.peek())
p.peek()
console.log("Esta vazio? "+p.isEmpty())
console.log("Tamanho da pilha: " + p.size())
p.print()
p.clear()
console.log("Esta vazio? "+p.isEmpty())