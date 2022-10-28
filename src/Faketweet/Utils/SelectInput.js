


export function SelectInput ({
	title="Select",
	OPTIONS, option, setOption,
	custom=false, min=false, max=false,
	validatorFunc = v => true
}) {

	const options = OPTIONS.map((op, k) => <option key={k} value={op}>{op}</option>);

	const validate = v => {
		if (min !== false && min > v.length) return false;
		if (max !== false && max < v.length) return false;
		return validatorFunc(v) ? true : false;
	};

	const handleChange = event => {
		const v = event.target.value.trim();
		if (validate(v)) {
			setOption(v);
		}
	};

	return (
		<div>
			<div>
				<h2 className="px-2 py-2 font-bold text-sm">{title}</h2>
			</div>
			<div>
				<select name="" id="" defaultValue={option} onChange={handleChange} className="block w-48 p-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500">
					{options}
					<option value="">Custom</option>
				</select>
			</div>
		</div>
	);
}


