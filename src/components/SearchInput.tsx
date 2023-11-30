import { useRef } from "react";

interface Props {
	onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
	const ref = useRef<HTMLInputElement>(null);

	return (
		<form
			onSubmit={(event) => {
				event.preventDefault();
				if (ref.current) onSearch(ref.current.value);
			}}
		>
			<input
				ref={ref}
				type="search"
				placeholder="Search Games"
				className="flex flex-grow rounded-lg border-zinc-600 bg-gray-100 px-1 py-2 outline-0 placeholder:pl-1 dark:bg-zinc-600/60 dark:text-zinc-200 md:w-[400px] md:pl-2 lg:ml-9 lg:w-[500px] xl:w-[600px]"
			/>
		</form>
	);
};

export default SearchInput;
