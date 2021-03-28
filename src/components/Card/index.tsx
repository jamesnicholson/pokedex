import { FC } from 'react'
import Pokemon  from '../../types/models/pokemon'

interface ICardProps {
    key:Number
    pokemon: Pokemon
}

const Card: FC<ICardProps> = ({pokemon}) => {
    return <img src={pokemon.spriteURL} alt={pokemon.displayName} />
}
export default Card