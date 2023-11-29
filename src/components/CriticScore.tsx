interface Props {
	score: number;
}

const CriticScore = ({ score }: Props) => {
	const bgColor =
		score > 75 ? "bg-green-500" : score > 60 ? "bg-yellow-500" : "bg-white";
	const textColor =
		score > 75 ? "text-white" : score > 60 ? "text-black" : "text-black";

	return (
		<div
			className={`rounded-md ${bgColor} px-1.5 text-sm font-semibold shadow-lg contrast-125 backdrop-blur-lg ${textColor}`}
		>
			{score}
		</div>
	);
};

export default CriticScore;
