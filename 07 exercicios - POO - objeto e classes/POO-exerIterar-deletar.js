const pessoa = {
    nome : 'joao',
    sobreNome : 'matheus',
    idade : 21,
    profissao : 'TV',
    dados : function(){
        console.log(`Meu nome é ${this.nome} ${this.sobreNome}, tenho ${this.idade} anos`)
    }
}
pessoa.nome = 'caio'
pessoa.sobreNome = 'Rocha'
pessoa.idade = 26
pessoa.profissao = 'militar',

delete pessoa.profissao

pessoa.dados();

console.log(pessoa)