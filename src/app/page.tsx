"use client";

import AddRoundedIcon from "@mui/icons-material/AddRounded";

import Tile from "@/components/ui/Tile/Tile";
import ActionButton from "@/components/ui/Button/Button";
import Meter from "@/components/ui/Meter/Meter";
import "@/app/globals.css";
import ScrollView from "@/components/ui/ScrollView/ScrollView";
import {useEffect, useState} from "react";
import {Box, Typography} from "@mui/material";
import Counter from "@/components/logic/Counter/Counter";
import Popup from "@/components/ui/Popup/Popup";
import FormInput from "@/components/ui/FormInput/FormInput";

export default function Home() {
	const [sum, setSum] = useState(10);
	const [open, setOpen] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setSum(88);
		}, 2000);
	}, []);

	return (
		<>
			<ScrollView component="main" className="main">
				<Tile
					title="Goal Progress"
					options="Edit"
					content={
						<Box
							className="ok"
							sx={{width: "100%", height: "150px", margin: "32px 0", position: "relative", display: "flex", alignItems: "flex-end", justifyContent: "center"}}
						>
							<Meter
								data={[
									{
										color: "#00C897",
										value: sum
									}
								]}
								backgroundColor="rgb(235, 235, 235)"
								title="Goal Weight"
							/>
							<Typography sx={{position: "absolute", bottom: "0", left: "50%", transform: "translate(-50%,0)", paddingBottom: "16px", fontWeight: "700", fontSize: "4em"}}>
								<Counter>{sum}</Counter>kg
							</Typography>
						</Box>
					}
				/>
				<Tile title="Statistics" options="Week" content="" />
				<ActionButton fill={true} rightIcon={<AddRoundedIcon />}>
					Update weight
				</ActionButton>
			</ScrollView>
			<Popup title="Welcome" open={open} bottomBar={<ActionButton onClick={() => setOpen(false)}>Save</ActionButton>}>
				<Box component="section" sx={{display: "flex", overflow: "auto", flexDirection: "column", gap: "32px"}}>
					<FormInput id="fullname" label="Full Name" />
					<FormInput id="weight" label="Current Weight (kg):" />
					<FormInput id="height" label="Height (cm):" />
				</Box>
			</Popup>
		</>
	);
}
