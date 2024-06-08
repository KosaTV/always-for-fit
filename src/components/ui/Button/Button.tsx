import {Box, Button} from "@mui/material";
import React from "react";
import {styles} from "./Button.styles";

interface ActionButtonProps {
	children: React.ReactNode;
	leftIcon?: React.ReactNode;
	rightIcon?: React.ReactNode;
	fill?: boolean;
	onClick?: () => void;
}

const ActionButton = ({children, leftIcon, rightIcon, fill, onClick}: ActionButtonProps) => {
	return (
		<Button onClick={onClick} sx={{...styles.button, ...(fill && styles.longButton)}}>
			{leftIcon && <Box sx={{...styles.buttonIcon, ...styles.leftButtonIcon}}>{leftIcon}</Box>}
			{children}
			{rightIcon && <Box sx={{...styles.buttonIcon, ...styles.rightButtonIcon}}>{rightIcon}</Box>}
		</Button>
	);
};

export default ActionButton;
