import { Link } from "react-router-dom";
import Image from "../Image";
import pokemon, { type Pokemon } from "../../primaryData";

export default function PokemonList() {
	return (
		<div className='flex flex-wrap gap-3'>
			{pokemon.map((poke: Pokemon) => (
				<Link to={`/pokemon/${poke.name}`} key={poke.name} className='pokeimage rounded-md'>
					<Image src={`/images/${poke.image}`} alt={poke.name} className='rounded-md' />
				</Link>
			))}
		</div>
	);
}
