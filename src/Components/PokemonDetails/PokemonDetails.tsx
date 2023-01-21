import { useLoaderData } from "react-router-dom";
import Header from "../../Header";
import { findPokemon, Pokemon } from "../../primaryData";
import Image from "../Image";

export async function loader({ params }: any) {
	const pokemon = findPokemon(params.pokemonName);
	return pokemon;
}

interface IColors {
	[key: string]: string;
}
const colors: IColors = {
	pikachu: "#9DCEAD",
	charmander: "#AF8F81",
	eevee: "#F3EAB4",
	snorlax: "#FCF4E0",
	bulbasaur: "#F8E7D6",
	squirtle: "#7885C1",
};

export default function PokemonDetails() {
	const data = useLoaderData() as Pokemon;
	console.log(data);
	let color = colors[data.name];
	console.log(color);
	let classNameDynamic = `min-h-screen bg-gradient-to-b from-[${color}] via-[${color}] to-white`;
	function getClassName(pokemon: string) {
		switch (pokemon) {
			case "pikachu": {
				return `min-h-screen bg-gradient-to-b from-[#9DCEAD] via-[#9DCEAD] to-white`;
			}
			case "charmander": {
				return `min-h-screen bg-gradient-to-b from-[#AF8F81] via-[#AF8F81] to-white`;
			}
			case "eevee": {
				return `min-h-screen bg-gradient-to-b from-[#F3EAB4] via-[#F3EAB4] to-white`;
			}
			case "snorlax": {
				return `min-h-screen bg-gradient-to-b from-[#FCF4E0] via-[#FCF4E0] to-white`;
			}
			case "bulbasaur": {
				return `min-h-screen bg-gradient-to-b from-[#F8E7D6] via-[#F8E7D6] to-white`;
			}
			case "squirtle": {
				return `min-h-screen bg-gradient-to-b from-[#7885C1] via-[#7885C1] to-white`;
			}
			default: {
				return `min-h-screen bg-gradient-to-b from-[#F3EAB4] via-[#F3EAB4] to-white`;
			}
		}
	}
	let classNameCurrent = getClassName(data.name);
	return (
		<div className={classNameCurrent}>
			<Header />
			<div className='image-container pt-4'>
				<Image alt={data.name} src={`/images/${data.image}`} />
			</div>
			{/* <div className='divider h-1 bg-black w-1/2 mx-auto'></div> */}
			<div className='details font-pixel'>
				<div className='text-4xl text-center capitalize font-bold'>{data.name}</div>
				<div className='text-md text-center'>type - Electric</div>
			</div>
		</div>
	);
}
