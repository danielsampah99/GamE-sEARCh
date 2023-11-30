import { Platform } from "../hooks/usePlatforms";
import usePlatforms from "../hooks/usePlatforms";

interface Props {
	onSelectPlatform: (platform: Platform) => void;
	selectedPlatform: Platform | null;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
	const { data, error } = usePlatforms();

	if (error) return null;

	return (
		<div className="p-3">
			<select className="mx-2 rounded-md bg-gray-100 px-2 py-1 text-base font-medium dark:bg-zinc-600 dark:text-neutral-400 md:px-4 md:py-2 md:text-lg lg:text-xl ">
				{selectedPlatform?.name || "Platform"}
				{data.map((platform) => (
					<option
						onClick={() => onSelectPlatform(platform)}
						key={platform.id}
					>
						{platform.name}
					</option>
				))}
			</select>
		</div>
	);
};

export default PlatformSelector;
