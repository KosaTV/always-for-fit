import Image from "next/image";
import styles from "./page.module.css";
import WebsiteUpdateImage from "../../public/assets/imgs/general/website-update.svg";

export default function Home() {
	return (
		<main className={styles.main}>
			<img style={{width: "28%"}} src={WebsiteUpdateImage.src} alt="website-update" />
			<div></div>
		</main>
	);
}
