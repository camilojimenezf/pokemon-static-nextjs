import React, { useEffect, useState } from 'react'
import { Layout } from '../../components/layouts'
import { NoFavorites } from '../../components/ui/NoFavorites';
import { localFavorites } from '../../utils';
import { FavoritePokemons } from '../../components/pokemon';

const FavoritesPage = () => {
  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritePokemons(localFavorites.favoritePokemons());
  }, []);

  return (
    <Layout title='Pokémons - Favoritos'>
      {
        favoritePokemons.length === 0
          ? (<NoFavorites />)
          : (
            <FavoritePokemons pokemonIds={favoritePokemons} />
          )
      }
    </Layout>
  );
}

export default FavoritesPage;
