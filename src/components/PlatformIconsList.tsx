import {
	FaWindows,
	FaPlaystation,
	FaXbox,
	FaApple,
	FaLinux,
	FaAndroid,
} from "react-icons/fa";
import { BsGlobe } from "react-icons/bs";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { Platform } from "../hooks/useGames";
import { IconType } from "react-icons";

interface Props {
	platforms: Platform[];
}

const PlatformIconsList = ({ platforms }: Props) => {
	const iconMap: { [key: string]: IconType } = {
		pc: FaWindows,
		xbox: FaXbox,
		playstation: FaPlaystation,
		mac: FaApple,
		linux: FaLinux,
		android: FaAndroid,
		web: BsGlobe,
		ios: MdPhoneIphone,
		nintendo: SiNintendo,
	};

	return (
		<>
			<div className="flex flex-row text-zinc-500 space-x-2">
				{platforms.map((platform) => {
					const IconComponent = iconMap[platform.slug];
					return <IconComponent key={platform.slug} />;
				})}
			</div>
		</>
	);
};

export default PlatformIconsList;
