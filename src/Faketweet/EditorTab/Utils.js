


export function NumberInput ({
	title="Number", num, setNum,
	min=false, max=false,
	displayFunc = v => v,
	validatorFunc = v => true
}) {

	const validate = v => {
		if (isNaN(v)) return;
		if (min !== false && min > v) return false;
		if (max !== false && max < v) return false;
		return validatorFunc(v) ? true : false;
	};

	const handleChange = event => {
		const value = event.target.value.trim();
		if (isNaN(value)) return;

		const v = parseInt(value);
		if (validate(v)) {
			setNum(v);
		}
	};

	return (
		<div className="px-2 py-2">
			<div>
				<h2 className="px-2 py-2 text-center">
					<span className="font-bold mr-2">{displayFunc(num)}</span>
					<span className="text-sm">{title}</span>
				</h2>
			</div>
			<div>
				<input type='text' defaultValue={num} onChange={handleChange} className="w-full text-lg px-2 py-2 border-2 border-blue-500" />
			</div>
		</div>
	);
}



export function StatInput ({
	title="Stat", stat, setStat,
	min=false, max=false,
	displayFunc = v => v,
	validatorFunc = v => true
}) {

	const validate = v => {
		if (isNaN(v)) return;
		if (min !== false && min > v) return false;
		if (max !== false && max < v) return false;
		return validatorFunc(v) ? true : false;
	};

	const handleChange = event => {
		const value = event.target.value.trim();
		if (isNaN(value)) return;

		const v = parseInt(value);
		if (validate(v)) {
			setStat(v);
		}
	};

	return (
		<div className="px-2 py-2">
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


