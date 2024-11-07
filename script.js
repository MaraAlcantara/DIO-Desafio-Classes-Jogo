class dadosHeroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let tipoAtaque;
        if (this.tipo === "Mago") {
            tipoAtaque = "usando magia";
        } else if (this.tipo === "Guerreiro") {
            tipoAtaque = "usando espada";
        } else if (this.tipo === "Monge") {
            tipoAtaque = "usando artes marciais";
        } else if (this.tipo === "Ninja") {
            tipoAtaque = "usando shuriken";
        }

        console.log(`O ${this.tipo} atacou ${tipoAtaque}`)
    }
}

let heroi = new dadosHeroi("Vitor", 39, "Mago");
let heroi1 = new dadosHeroi("Mara", 32, "Guerreiro");
let heroi2 = new dadosHeroi("José", 20, "Monge");
let heroi3 = new dadosHeroi("Pedro", 20, "Ninja");

heroi.atacar();
heroi1.atacar();
heroi2.atacar();
heroi3.atacar();

