import logo from "../assets/logo.webp";

const NavBar = () => {
	return (
		<nav className="flex h-fit grid-flow-col flex-wrap items-center justify-between dark:bg-zinc-800 md:col-span-2">
			<img
				className="h-12 w-12 md:h-16 md:w-16"
				src={logo}
				alt="Website Logo"
			/>

			<button
				className="mr-2 rounded-lg bg-zinc-800 px-2 py-1 text-base font-medium text-neutral-300 shadow-lg shadow-zinc-500/80 dark:bg-zinc-700 dark:shadow-zinc-800/60 md:px-4 md:py-2 md:text-lg md:font-semibold"
				type="button"
			>
				Dark Mode
			</button>
		</nav>
	);
};

export default NavBar;
