import {navbarLinks} from "@/constants";

const getCurrentPageName = (path: string) => {
	const matchingLink = navbarLinks.find(link => link.href.startsWith(path));
	return matchingLink?.label || "";
};

export default getCurrentPageName;
