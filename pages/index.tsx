import { NextPage, GetStaticProps } from 'next';
import { Layout } from '../components/layouts/Layout';
import { pokeApi } from '../api';
import { PokemonListResponse, SmallPokemon } from '../interfaces/';

interface Props {
  pokemons: SmallPokemon[];
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
  return (
    <Layout title="Listado de Pokémons">
      <ul>
        {pokemons.map(({id, name}: SmallPokemon) => (
          <li key={id}>#{id} - {name}</li>
        ))}
      </ul>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');
  const pokemons: SmallPokemon[] = data.results.map((pokemon: SmallPokemon, idx: number) => ({
      url: pokemon.url,
      name: pokemon.name,
      id: (idx + 1).toString(),
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${idx + 1}.svg`
    }));
  return {
    props: {
      pokemons,
    }
  }
}

export default HomePage;
