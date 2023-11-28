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
			className={`rounded-md ${bgColor} backdrop-blur-lg px-1.5 text-sm contrast-125 font-semibold shadow-lg ${textColor}`}
		>
			{score}
		</div>
	);
};

export default CriticScore;
