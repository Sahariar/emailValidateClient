/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: "#043560",

					secondary: "#e2bb09",

					accent: "#81aedb",

					neutral: "#291A2D",

					"base-100": "#EEEEF7",

					info: "#355FD4",

					success: "#249460",

					warning: "#EE9D2B",

					error: "#EC6F75",
				},
			},
		],
	},
	plugins: [require("daisyui")],
};
