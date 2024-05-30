"use client";

import React from "react";
import {Box, Typography} from "@mui/material";
import ProfileHeader from "../ProfileHeader/ProfileHeader";
import {styles} from "./Topbar.styles";
import getCurrentPageName from "@/utils/getCurrentPageName";
import {usePathname} from "next/navigation";

const Navbar = () => {
	const pathname = usePathname();

	return (
		<Box sx={styles.topbarCnt}>
			<Box sx={styles.screenTitleBox}>
				<Typography>Overview</Typography>
				<Typography sx={{fontWeight: "bold", fontSize: "2em"}}>{getCurrentPageName(pathname)}</Typography>
			</Box>
			<ProfileHeader />
		</Box>
	);
};

export default Navbar;
