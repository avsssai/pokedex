/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		maxWidth: {
			wrapperWidth: `min(100%, (1200px + 32px * 2))`,
		},
		fontFamily: {
			pixel: `'DotGothic16', sans-serif;`,
		},
		extend: {
			backgroundColor: {
				pikachu: "#9DCEAD",
				charmander: "#AF8F81",
				eevee: "#F3EAB4",
				snorlax: "#FCF4E0",
				bulbasaur: "#F8E7D6",
				squirtle: "#7885C1",
			},
			color: {
				pikachu: "#9DCEAD",
				charmander: "#AF8F81",
				eevee: "#F3EAB4",
				snorlax: "#FCF4E0",
				bulbasaur: "#F8E7D6",
				squirtle: "#7885C1",
			},
		},
	},
	plugins: [],
};
