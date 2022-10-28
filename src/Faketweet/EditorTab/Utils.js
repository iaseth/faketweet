


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
			<div className="w-40 mx-auto select-none px-3 py-3 w-30 overflow-hidden bg-slate-50 border-2 cursor-pointer outline-none duration-300 shadow hover:border-blue-500 focus:border-blue-500"
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



export function InputGroupContainer ({children}) {
	return (
		<div className="md:flex md:items-end ch:grow ch:basis-0 bg-blue-200 mb-4 px-3 py-5 ch:px-2 ch:py-2">{children}</div>
	);
}



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



function InputBox ({type, defaultValue, onChange}) {
	return <input type={type} defaultValue={defaultValue} onChange={onChange} className="shadow appearance-none border-2 border-blue-200 rounded w-full py-3 px-3 text-base text-gray-700 leading-tight outline-none duration-300 hover:border-blue-500 focus:border-blue-500" />;
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
		<div>
			<div>
				<h2 className="px-2 py-2 flex font-bold">
					<span className="grow text-sm mr-2">{title}</span>
					<span className="text-base">{displayFunc(num)}</span>
				</h2>
			</div>
			<div>
				<InputBox type='text' defaultValue={num} onChange={handleChange} />
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
		<div>
			<div>
				<h2 className="px-2 py-2 text-center">
					<span className="font-bold mr-2">{displayFunc(stat)}</span>
					<span className="text-sm">{title}</span>
				</h2>
			</div>
			<div>
				<InputBox type='text' defaultValue={stat} onChange={handleChange} />
			</div>
		</div>
	);
}


