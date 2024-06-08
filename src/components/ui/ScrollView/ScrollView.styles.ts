export const styles = {
	scrollView: {
		overflowY: "auto",
		"&::-webkit-scrollbar": {
			display: "none"
		},
		"&::before,&::after": {
			content: '""',
			position: "sticky",
			pointerEvents: "none",
			left: "0",
			display: "block",
			width: "100%",
			zIndex: 999
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
	}
};
