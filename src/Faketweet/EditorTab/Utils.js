


export function StatInput ({
	title="Stat", stat, setStat,
	min=false, max=false,
	displayFunc = x => x,
	validatorFunc = x => true
}) {

	const validate = v => {
		if (min !== false && min > v) return false;
		if (max !== false && max < v) return false;
		return validatorFunc(v) ? true : false;
	};

	const handleChange = event => {
		if (isNaN(event.target.value)) return;
		const v = parseInt(event.target.value);
		if (validate(v)) {
			setStat(v);
		}
	};

	return (
		<div className="px-2 py-2 grow">
			<div>
				<h2 className="px-2 py-2 text-center">
					<span className="font-bold mr-2">{displayFunc(stat)}</span>
					<span className="text-sm">{title}</span>
				</h2>
			</div>
			<div>
				<input type='text' defaultValue={stat} onChange={handleChange} className="w-full text-lg px-2 py-2 border-2 border-blue-500" />
			</div>
		</div>
	);
}


