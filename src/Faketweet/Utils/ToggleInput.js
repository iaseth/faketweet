


export function ToggleInput ({title, toggle, setToggle}) {
	let circleClass = "h-6 w-6 -translate-y-1 rounded duration-300";
	circleClass += toggle ? " bg-green-600 translate-x-10" : " bg-gray-600";

	function handleKeyPress (e) {
		if (e.keyCode === 32) {
			e.preventDefault();
			setToggle(!toggle);
		}
	}

	return (
		<div>
			<div className="w-36 mx-auto select-none px-3 py-3 overflow-hidden bg-slate-50 border-2 cursor-pointer outline-none duration-300 shadow hover:border-blue-500 focus:border-blue-500"
				onClick={() => setToggle(!toggle)} tabIndex="0" onKeyDown={handleKeyPress}>
				<div>
					<h2 className="text-sm text-center font-bold">{title}</h2>
				</div>
				<div className="px-3 pt-4 pb-2 rounded-md">
					<div className="bg-gray-400 w-16 h-4 mx-auto rounded">
						<div className={circleClass}></div>
					</div>
				</div>
			</div>
		</div>
	);
}


