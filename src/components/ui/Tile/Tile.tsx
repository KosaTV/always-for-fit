import {Box, Typography} from "@mui/material";
import React from "react";

interface TileProps {
	title: string;
	options?: string;
	content: string;
}

const Tile = ({title, options, content}: TileProps) => {
	return (
		<Box>
			<Box>
				<Typography>{title}</Typography>
			</Box>
			{options && (
				<Box>
					<Typography>{options}</Typography>
				</Box>
			)}
		</Box>
	);
};

export default Tile;
