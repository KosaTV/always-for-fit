"use client";

import React from "react";
import {navbarLinks} from "@/constants";
import {BottomNavigation, BottomNavigationAction, Box} from "@mui/material";
import {styles} from "./Navbar.styles";
import Link from "next/link";
import {usePathname} from "next/navigation";

const Navbar = () => {
	const pathname = usePathname();

	return (
		<Box sx={styles.navbarCnt}>
			<BottomNavigation>
				{navbarLinks.map(link => {
					const isCurrentPage = pathname.startsWith(link.href);

					return (
						<Link href={link.href} key={link.label}>
							<BottomNavigationAction sx={{...styles.navbarItem, ...(isCurrentPage && styles.navbarItemActive)}} label={link.label} icon={link.label}></BottomNavigationAction>
						</Link>
					);
				})}
			</BottomNavigation>
		</Box>
	);
};

export default Navbar;
