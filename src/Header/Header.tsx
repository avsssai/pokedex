import PokemonLogo from "../assets/pokemon.svg";
import { Menu } from "react-feather";
import { Link } from "react-router-dom";

export default function Header() {
	return (
		<header className='header p-4 flex items-center justify-between'>
			<div className='LogoContainer w-[128px] md:w-[196px]'>
				<Link to='/'>
					<img src={PokemonLogo} alt='pokemon logo' />
				</Link>
			</div>
			<div className=''>
				<Menu color='white' size={32} />
			</div>
		</header>
	);
}
