"use client";

import {createTheme} from "@mui/material/styles";

const lightTheme = createTheme({
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
