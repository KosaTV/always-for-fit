import {Box, Button, FormControl, Input, InputLabel, Modal, Typography} from "@mui/material";
import React from "react";
import FormInput from "@/components/ui/FormInput/FormInput";
import CloseIcon from "@mui/icons-material/Close";

interface PopupProps {
	title: string;
	bottomBar?: React.ReactNode;
	children?: React.ReactNode;
	open: Boolean;
}

const Popup = ({title, bottomBar, children, open}: PopupProps) => {
	return (
		<Modal open={open}>
			<Box
				sx={{
					outline: "none",
					position: "absolute",
					bottom: "0",
					display: "flex",
					flexDirection: "column",
					borderRadius: "16px",
					padding: "32px",
					background: "white",
					maxHeight: "100%",
					minHeight: "500px",
					width: "100%",
					overflow: "hidden"
				}}
				component="article"
			>
				<Box component="header" sx={{position: "relative", textAlign: "center", paddingBottom: "16px"}}>
					<Button
						sx={{
							// display: "flex",
							display: "none", // for now
							justifyContent: "center",
							alignItems: "center",
							position: "absolute",
							left: "-16px",
							top: "-16px",
							color: "black",
							backgroundColor: "grey.100",
							borderRadius: "50%",
							minWidth: "55px",
							height: "55px"
						}}
					>
						<CloseIcon />
					</Button>
					<Typography component="h1" sx={{fontSize: "2em"}}>
						{title}
					</Typography>
				</Box>
				{children}
				{bottomBar && <Box sx={{paddingTop: "32px", textAlign: "center"}}>{bottomBar}</Box>}
			</Box>
		</Modal>
	);
};

export default Popup;
