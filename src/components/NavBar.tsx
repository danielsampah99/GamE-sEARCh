import logo from "../assets/logo.webp";
import SearchInput from "./SearchInput";

interface Props {
	onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
	return (
		<nav className="fixed top-0 z-50 flex w-screen flex-row items-center justify-between bg-white px-2 py-1 shadow-lg dark:bg-zinc-700  dark:shadow-zinc-900/90">
			<img
				className="h-12 w-12 md:h-16 md:w-16"
				src={logo}
				alt="Website Logo"
			/>
			<SearchInput onSearch={onSearch} />
			<h1 className="mx-2 whitespace-nowrap  px-2 py-1 font-mono text-base font-medium italic dark:text-neutral-300 md:px-4 md:py-2 md:text-lg md:font-semibold">
				GamE sEARCh
			</h1>
		</nav>
	);
};

export default NavBar;
