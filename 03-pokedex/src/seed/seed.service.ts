import { Injectable } from '@nestjs/common';
import { PokeResponse } from './interfaces/poke-apiresponse.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Pokemon } from '../pokemon/entities/pokemon.entity';
import { Model } from 'mongoose';
import { PokemonInsert } from './interfaces/pokemon-insert.interface';
import { AxiosAdapter } from 'src/common/adapters/axios.adapter';

@Injectable()
export class SeedService {
  constructor(
    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>,
    private readonly http: AxiosAdapter
  ) {}

  async executeSeed() {

    await this.pokemonModel.deleteMany({}); // delete * from pokemons

    const data = await this.http.get<PokeResponse>('https://pokeapi.co/api/v2/pokemon?limit=20')

    const pokemonToInsert: PokemonInsert[] = [];

    data.results.forEach(async ({ name, url }) => {
      const segments = url.split('/');
      const no = +segments[segments.length - 2];
      name.toLowerCase();

      pokemonToInsert.push({ name, no })

    });

    await this.pokemonModel.insertMany( pokemonToInsert )


    return 'Seed executed';
  }
}
