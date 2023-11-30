interface Props {
	onSelectSortOrder: (sortOrder: string) => void;
	sortOrder: string;
}

const SortSelector = ({ onSelectSortOrder, sortOrder }: Props) => {
	const sortOrders = [
		{ value: "", label: "Relevance" },
		{ value: "-added", label: "Date added" },
		{ value: "name", label: "Name" },
		{ value: "-released", label: "Release Date" },
		{ value: "metacritic", label: "Popularity" },
	];

	const currentSortOrder = sortOrders.find(
		(order) => order.value === sortOrder,
	);

	return (
		<div className="ml-2 p-3 ">
			<select className="mx-2 rounded-md bg-gray-100 px-2 py-1 text-base font-medium dark:bg-zinc-600 dark:text-neutral-400 md:px-4 md:py-2 md:text-lg lg:text-xl ">
				Order By: {currentSortOrder?.label || "Relevance"}
				{sortOrders.map((order) => (
					<option
						onClick={() => onSelectSortOrder(order.value)}
						key={order.value}
						value={order.value}
					>
						{order.label}
					</option>
				))}
			</select>
		</div>
	);
};

export default SortSelector;
