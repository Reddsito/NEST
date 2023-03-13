class NewPokemon{

    constructor(
        public readonly id: number,
        public name: string
    ){}

    scream(){
        console.log(`NO QUIERO!!!`);
    }

    speak(){
        console.log(`NO QUIERO HABLAR!`);
    }

}


//Los decoradores solo son funciones, que pueden modificar clases o métodos, en este caso modificamos los métodos, y hacemos que nuestra clase Pokemon tenga otro return.
const MyDecorator = () =>{
    return ( target: Function ) => {
        return NewPokemon;
    }
};



@MyDecorator()
export class Pokemon {
    
    constructor(
        public readonly id: number,
        public name: string
    ){}

    scream(){
        console.log(`${this.name.toUpperCase()}!!!`);
    }

    speak(){
        console.log(`${this.name}!`);
    }
}

export const charmander = new Pokemon(4, 'Charmander');

charmander.scream();
charmander.speak();