let pokemon: Pokemon[] = [
	{ name: "pikachu", image: `pikachu.webp` },
	{ name: "charmander", image: `charmander.webp` },
	{ name: "eevee", image: `eevee.webp` },
	{ name: "snorlax", image: `snorlax.webp` },
	{ name: "bulbasaur", image: `bulbasaur.webp` },
	{ name: "squirtle", image: `squirtle.webp` },
];

export interface Pokemon {
	name: string;
	image: string;
}

export function findPokemon(name: string): Pokemon | undefined {
	return pokemon.find((poke) => poke.name === name);
}

export default pokemon;
