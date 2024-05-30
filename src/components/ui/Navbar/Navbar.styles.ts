export const styles = {
	navbarCnt: {
		display: "flex",
		justifyContent: "center",
		position: "absolute",
		bottom: "0",
		left: "50%",
		padding: "24px 0",
		width: "calc(100% - 48px)",
		transform: "translateX(-50%)"
	},
	navigationBox: {
		justifyContent: "stretch",
		height: "72px",
		width: "100%",
		backgroundColor: "transparent"
	},
	navLink: {display: "flex", gap: "8px", flexDirection: "column", alignItems: "center"},
	navbarItem: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		flex: "1",
		color: "gray",
		borderRadius: "15px",
		background: "transparent"
	},
	navbarLabel: {color: "gray", fontSize: "14px", fontWeight: "600", letterSpacing: "1px", transition: "color .2s 0s ease"},
	navbarIconActive: {
		color: "secondary.main",
		"& ~ p": {
			color: "secondary.main"
		}
	},
	navbarItemActive: {
		color: "secondary.main",
		borderRadius: "15px",
		background: "white",
		boxShadow: "0 15px 35px 0 rgba(0,0,0,.05)"
	}
};
