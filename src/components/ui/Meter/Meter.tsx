import {Box} from "@mui/material";
import React from "react";
import {Chart, ArcElement} from "chart.js";
import {Doughnut} from "react-chartjs-2";
import useChartData, {IChartData} from "@/hooks/useChartData";
import {IMeterDataItem} from "@/interfaces/meter.interface";
import {getPercentage} from "@/helpers/getPercentage";

interface MeterProps {
	title: string;
	data: IMeterDataItem[];
	backgroundColor: string;
}

const meterConfiguration: any = {
	events: [],
	maintainAspectRatio: false,
	rotation: -90,
	circumference: 180,
	layout: {
		autoPadding: false
	},
	cutout: "88%"
};

const meterStyle: any = {
	backgroundColor: ["black", "transparent"],
	hoverOffset: 0,
	borderWidth: 0,
	borderRadius: 40
};

Chart.register(ArcElement);

const Meter = ({data, title, backgroundColor}: MeterProps) => {
	const chartData = useChartData(data);
	const chartSum = getPercentage(chartData.data);

	return (
		<>
			<Doughnut
				style={{position: "absolute"}}
				data={{
					datasets: [
						{
							...meterStyle,
							data: [1],
							backgroundColor: [backgroundColor]
						}
					]
				}}
				options={{
					...meterConfiguration,
					animation: {
						duration: 0,
						easing: "linear",
						animateRotate: false
					}
				}}
			/>
			<Doughnut
				style={{position: "absolute", pointerEvents: "none"}}
				data={{
					datasets: [
						{
							...meterStyle,
							label: title,
							data: [...chartData.data, Math.min(Math.max(100 - chartSum, 0), 100)],
							backgroundColor: [...chartData.backgroundColors, "transparent"]
						}
					]
				}}
				options={meterConfiguration}
			/>
		</>
	);
};

export default Meter;
