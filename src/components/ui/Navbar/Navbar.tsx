"use client";

import React from "react";
import {navbarLinks} from "@/constants";
import {BottomNavigation, BottomNavigationAction, Box, Typography} from "@mui/material";
import {styles} from "./Navbar.styles";
import Link from "next/link";
import {usePathname} from "next/navigation";

const Navbar = () => {
	const pathname = usePathname();

	return (
		<Box sx={styles.navbarCnt}>
			<BottomNavigation sx={styles.navigationBox}>
				{navbarLinks.map(link => {
					const isCurrentPage = (pathname.startsWith(link.href) && link.href !== "/") || (link.href === "/" && pathname === link.href);

					return (
						<Link href={link.href} key={link.label} style={{...styles.navbarItem, ...(isCurrentPage && styles.navbarItemActive)}}>
							<Box sx={styles.navLink as React.CSSProperties}>
								<BottomNavigationAction sx={{...(isCurrentPage && styles.navbarIconActive)}} disableRipple icon={<link.Icon />} />
								<Typography sx={styles.navbarLabel}>{link.label}</Typography>
							</Box>
						</Link>
					);
				})}
			</BottomNavigation>
		</Box>
	);
};

export default Navbar;
