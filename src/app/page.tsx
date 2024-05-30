"use client";

import AddRoundedIcon from "@mui/icons-material/AddRounded";

import Tile from "@/components/ui/Tile/Tile";
import ActionButton from "@/components/ui/Button/Button";
import {Box} from "@mui/material";
import {Doughnut} from "react-chartjs-2";
import {Chart, ArcElement} from "chart.js";
Chart.register(ArcElement);

export default function Home() {
	return (
		<Box
			component="main"
			sx={{
				position: "absolute",
				top: "132px",
				width: "calc(100% - 48px)",
				height: "calc(100% - 132px - 120px)",
				overflowY: "auto",
				"&::-webkit-scrollbar": {
					display: "none"
				},
				"&::before,&::after": {
					position: "sticky",
					content: '""',
					pointerEvents: "none",
					left: "0",
					display: "block",
					width: "100%",
					zIndex: 999999
				},
				"&::before": {
					top: "0",
					height: "20px",
					background: "linear-gradient(0, transparent 0%, #fafbfd 100%)"
				},
				"&::after": {
					bottom: "0",
					height: "20px",
					background: "linear-gradient(0, #fafbfd 0%, transparent 100%)"
				}
			}}
		>
			<Tile
				title="Goal Progress"
				options="Edit"
				content={
					<Doughnut
						data={{
							labels: ["Red", "Blue", "Yellow"],
							datasets: [
								{
									label: "My First Dataset",
									data: [300, 50, 100],
									backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)", "rgb(255, 205, 86)"],
									hoverOffset: 4
								}
							]
						}}
						chart-options="chartOptions"
					/>
				}
			/>
			<Tile title="Statistics" options="Week" content="" />
			<ActionButton fill={true} rightIcon={<AddRoundedIcon />}>
				Update weight
			</ActionButton>
		</Box>
	);
}
