import { Grid } from '@nextui-org/react'
import React, { FC } from 'react'
import { FavoriteCardPokemon } from './FavoriteCardPokemon'

interface Props {
  pokemonIds: number[]
}

export const FavoritePokemons: FC<Props> = ({ pokemonIds }) => {
  return (
    <Grid.Container gap={2} direction='row' justify='flex-start'>
      {
        pokemonIds.map((id) => (
          <Grid key={id} xs={6} sm={3} md={2} xl={1}>
            <FavoriteCardPokemon id={id} />
          </Grid>
        ))
      }
    </Grid.Container>
  )
}
