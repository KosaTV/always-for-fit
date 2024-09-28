import {IMeterDataItem} from "@/interfaces/meter.interface";
import {useState, useEffect} from "react";

export interface IChartData {
	data: number[];
	backgroundColors: string[];
}

const useChartData = (data: IMeterDataItem[]) => {
	const [chartData, setChartData] = useState<IChartData>({
		data: [],
		backgroundColors: []
	});

	useEffect(() => {
		const formattedData = {
			data: data.map(item => item.value),
			backgroundColors: data.map(item => item.color)
		};
		setChartData(formattedData);
	}, [data]);

	return chartData;
};

export default useChartData;
