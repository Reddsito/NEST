import { HttpAdapter, PokeAdapterFetch} from '../api/pokeApi.adapter';
import { Move, PokeapiResponse } from '../interfaces/pokeapi-response.interface';

export class Pokemon{

    get imageUrl(): string {
        return `https://pokemon.com/${ this.id }.jpg`
    }

    constructor(
        public readonly id: number, 
        public name: string,
        private readonly http: HttpAdapter
        
    ) {}


    speaker(){
        console.log(`${this.name.toUpperCase()}!!!`)
    }

    async getMoves(): Promise<Move[]>  {

        const data = await this.http.get<PokeapiResponse>('https://pokeapi.co/api/v2/pokemon/4');

        console.log(data.moves);

        return data.moves;
    }

};

const pokeApiFetch = new PokeAdapterFetch();

export const charmander = new Pokemon(1, "charmander", pokeApiFetch);


charmander.getMoves();