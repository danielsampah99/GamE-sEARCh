import { ReactNode } from "react";

interface Props {
	children: ReactNode;
}
const GameCardContainer = ({ children }: Props) => {
	return (
		<div className="overflow-hidden rounded-lg shadow-lg">{children}</div>
	);
};

export default GameCardContainer;
