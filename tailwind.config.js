/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./App.{js,ts,tsx}", "./app/**/*.{js,ts,tsx}", "./components/**/*.{js,ts,tsx}"],

	presets: [require("nativewind/preset")],
	darkMode: "class",
	theme: {
		extend: {
			fontFamily: {
				"circular-black": "CircularStd-Black",
				"circular-bold": "CircularStd-Bold",
				"circular-book": "CircularStd-Book",
				"circular-medium": "CircularStd-Medium",
				"circular-light": "CircularStd-Light",
				"circular-black-italic": "CircularStd-BlackItalic",
				"circular-bold-italic": "CircularStd-BoldItalic",
				"circular-book-italic": "CircularStd-BookItalic",
				"circular-medium-italic": "CircularStd-MediumItalic",
				"circular-light-italic": "CircularStd-LightItalic",
				"manrope-bold": "Manrope-Bold",
				"manrope-extra-bold": "Manrope-ExtraBold",
				"manrope-extra-light": "Manrope-ExtraLight",
				"manrope-light": "Manrope-Light",
				"manrope-medium": "Manrope-Medium",
				"manrope-regular": "Manrope-Regular",
				"manrope-semi-bold": "Manrope-SemiBold",
			},
		},
	},
	plugins: [],
};
