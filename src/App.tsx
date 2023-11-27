function App() {
	return (
		<>
			<div className="grid grid-cols-1 md:grid-cols-2 h-screen">
				<div className="md:col-span-2 bg-blue-500">Nav Bar</div>
				<div className=" hidden md:grid md:w-auto bg-yellow-500">
					Aside
				</div>
				<div className="bg-red-500">Main</div>
			</div>
		</>
	);
}

export default App;
