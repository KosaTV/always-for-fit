"use client";

import {createTheme} from "@mui/material/styles";

const globalStyles = {
	typography: {
		fontFamily: ["Lato"].join(","),
		fontSize: 16,
		allVariants: {
			color: "#000"
		}
	}
};

const lightTheme = createTheme({
	...globalStyles,
	palette: {
		primary: {
			main: "#fff"
		},
		secondary: {
			main: "#00C897"
		},
		text: {
			primary: "#000"
		},
		grey: {
			50: "#C1C1C1",
			100: "#F5F5F5"
		},
		divider: "#C1C1C1",
		background: {
			default: "#FAFBFD"
		}
	}
});

const darkTheme = createTheme({
	palette: {
		primary: {
			main: "#151628"
		},
		secondary: {
			main: "#00C897"
		},
		text: {
			primary: "#BBBBBB"
		},
		divider: "#787C9B",
		background: {
			default: "#0E0F1B"
		}
	}
});

export {lightTheme, darkTheme};
