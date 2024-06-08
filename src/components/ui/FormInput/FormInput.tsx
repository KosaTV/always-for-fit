import React from "react";
import {FormControl, Input, Typography} from "@mui/material";

interface FormInputProps {
	id: string;
	label: string;
}

const FormInput = ({id, label}: FormInputProps) => {
	return (
		<FormControl hiddenLabel={true}>
			<Typography component="label" htmlFor={id}>
				{label}
			</Typography>
			<Input
				inputProps={{
					underline: {
						"&::before": {display: "none"},
						"&::after": {display: "none"}
					}
				}}
				sx={{borderBottom: "3px solid", borderColor: "secondary.main", borderRadius: "10px", backgroundColor: "grey.100", padding: "8px 16px"}}
				id={id}
			/>
		</FormControl>
	);
};

export default FormInput;
