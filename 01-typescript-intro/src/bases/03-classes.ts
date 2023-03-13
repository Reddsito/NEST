import axios from 'axios';
import { PokeapiResponse, Move } from '../interfaces/pokeapi-response.interface';

export class Pokemon{

    get imageUrl(): string {
        return `https://pokemon.com/${ this.id }.jpg`
    }

    constructor(
        public readonly id: number, 
        public name: string
        
    ) {}

    //El readonly es para hacer que una variable solo se pueda leer, mas no cambiar, si lo intentas typescript te tirará error.

    //Las variables y metodos por defecto son public, al colocar 'private' solo se puede utilizar dentro de la clase.

    speaker(){
        console.log(`${this.name.toUpperCase()}!!!`)
    }

    async getMoves(): Promise<Move[]>  {

        const{ data } = await axios.get<PokeapiResponse>('https://pokeapi.co/api/v2/pokemon/4')

        console.log(data.moves);

        return data.moves;
    }

};

export const charmander = new Pokemon(1, "charmander");

// console.log(charmander);
// console.log(charmander.speaker());
// console.log(charmander.getMoves());
charmander.getMoves();