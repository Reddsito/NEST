export const pokemonsIds = [1,14,35,14,23];


interface Pokemon {
    id: number;
    name: string;
    //con '?' podemos hacer que un valor de nuestra interfaz sea opcional y con undefined, que puede venir el atributo sin nada, pero es necesario que venga el atributo.
    age?: number;
}

export const bulbasour: Pokemon = {
    id: 1,
    name: 'Bulbasour',
}

export const charmander: Pokemon = {
    id: 1,
    name: 'Bulbasour',
}

//Las interrface difieren de las clases porque no puedes hacer una instancias de ellos.



export const pokemons: Pokemon[] = [];

pokemons.push(bulbasour, charmander);

console.log(pokemons);