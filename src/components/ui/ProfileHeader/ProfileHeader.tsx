import {Box} from "@mui/material";
import Image from "next/image";
import React from "react";
import ProfileTemplate from "../../../../public/assets/imgs/general/profile_template.jpg";
import {styles} from "./ProfileHeader.styles";

const ProfileHeader = () => {
	return (
		<Box sx={{position: "relative", maxWidth: "65px", maxHeight: "65px"}}>
			<Image alt="profile" width={65} height={65} src={ProfileTemplate} style={{borderRadius: "50%", objectFit: "cover", width: "100%", height: "100%"}} />
			<Box sx={styles.profileStatusIndicator}></Box>
		</Box>
	);
};

export default ProfileHeader;
