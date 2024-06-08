import React from "react";
import {useSpring, animated} from "@react-spring/web";

interface CounterProps {
	children?: number;
	speed?: number;
}

const Counter = ({children, speed}: CounterProps = {children: 0, speed: 40}) => {
	const {number} = useSpring({
		from: {number: 0},
		number: children,
		delay: speed,
		config: {mass: 1, tension: 21, friction: 12}
	});

	return <animated.span>{number.to(counter => counter.toFixed(0))}</animated.span>;
};

export default Counter;
