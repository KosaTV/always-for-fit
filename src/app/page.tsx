"use client";

import styles from "./page.module.css";
import Tile from "@/components/ui/Tile/Tile";
import ActionButton from "@/components/ui/Button/Button";

export default function Home() {
	return (
		<main className={styles.main}>
			<Tile title="Goal Progress" options="edit" content="" />
			<Tile title="Statistics" options="Week" content="" />
			<ActionButton>Add weight</ActionButton>
		</main>
	);
}
