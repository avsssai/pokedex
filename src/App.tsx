import MaxWidthWrapper from "./MaxWidthWrapper";

import PokemonList from "./Components/PokemonList";
import Header from "./Header";

function App() {
	return (
		<div className='bg-neutral-800 min-h-screen'>
			<Header />
			<MaxWidthWrapper>
				<div className='mb-10  text-white font-pixel text-center'>
					<div className='text-4xl font-bold mb-4'>
						Welcome to your Pokedex<span className='animate-ping'>_</span>
					</div>
					<div className=''>
						Click on a Pokemon to get started <span className='animate-bounce inline-block'>&#8595;</span>
					</div>
				</div>

				<PokemonList />
			</MaxWidthWrapper>
		</div>
	);
}

export default App;
