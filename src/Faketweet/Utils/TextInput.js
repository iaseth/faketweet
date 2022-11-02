


export function TextBoxInput ({
	title="TextBox", text, setText,
	min=false, max=false,
	validatorFunc = v => true
}) {

	const validate = v => {
		if (min !== false && min > v.length) return false;
		if (max !== false && max < v.length) return false;
		return validatorFunc(v) ? true : false;
	};

	const handleChange = event => {
		const v = event.target.value.trim();
		if (validate(v)) {
			setText(v);
		}
	};

	return (
		<div>
			<div>
				<h2 className="px-2 py-2 font-bold text-sm">{title}</h2>
			</div>
			<div>
				<textarea rows={4} defaultValue={text} onChange={handleChange} className="shadow appearance-none border-2 border-blue-200 rounded w-full py-3 px-3 text-base text-gray-700 leading-tight outline-none duration-300 hover:border-blue-500 focus:border-blue-500"></textarea>
			</div>
		</div>
	);
}



export function InputBox ({type, defaultValue, onChange}) {
	return <input type={type} defaultValue={defaultValue} onChange={onChange} className="bg-slate-50 shadow appearance-none border-2 border-blue-200 w-full py-3 px-3 text-base text-gray-700 leading-tight outline-none duration-300 hover:border-blue-500 focus:border-blue-500" />;
}



export function TextInput ({
	title="Text", text, setText,
	min=false, max=false,
	validatorFunc = v => true
}) {

	const validate = v => {
		if (min !== false && min > v.length) return false;
		if (max !== false && max < v.length) return false;
		return validatorFunc(v) ? true : false;
	};

	const handleChange = event => {
		const v = event.target.value.trim();
		if (validate(v)) {
			setText(v);
		}
	};

	return (
		<div>
			<div>
				<h2 className="px-2 py-2 font-bold text-sm">{title}</h2>
			</div>
			<div>
				<InputBox type='text' defaultValue={text} onChange={handleChange} />
			</div>
		</div>
	);
}


