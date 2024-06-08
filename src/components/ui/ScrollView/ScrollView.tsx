import React from "react";
import {Box} from "@mui/material";
import {styles} from "./ScrollView.styles";

interface ScrollViewProps {
	component: any;
	className: string;
	children: React.ReactNode;
}

const ScrollView = (props: ScrollViewProps) => {
	return <Box {...props} sx={styles.scrollView} />;
};

export default ScrollView;
