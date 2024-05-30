import {Box, ButtonBase, Typography} from "@mui/material";
import React from "react";

interface TileProps {
	title: string;
	options?: string;
	content: React.ReactNode;
}

const Tile = ({title, options, content}: TileProps) => {
	return (
		<Box
			sx={{
				backgroundColor: "primary.main",
				marginBottom: "20px",
				width: "100%",
				height: "50%",
				overflow: "hidden",
				borderRadius: "16px",
				boxShadow: "0 2px 24px -16px gray",
				padding: "16px"
			}}
		>
			<Box sx={{display: "flex", justifyContent: "space-between"}}>
				<Box>
					<Typography sx={{fontSize: "14px", fontWeight: "600"}}>{title}</Typography>
				</Box>
				{options && (
					<ButtonBase sx={{backgroundColor: "grey.100", color: "grey.50", width: "fit-content", padding: "4px 12px", borderRadius: "8px"}}>
						<Typography sx={{fontSize: "14px", fontWeight: "400"}}>{options}</Typography>
					</ButtonBase>
				)}
			</Box>
			<Box>{content}</Box>
		</Box>
	);
};

export default Tile;
