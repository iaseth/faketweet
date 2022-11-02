import React from 'react';

import {InputBox} from './TextInput';



function PlusMinusButton ({text="+", onClick}) {
	return (
		<button onClick={onClick} className="w-20 bg-blue-500 text-white border-2 border-blue-600 cursor-pointer font-bold first:rounded-l last:rounded-r">
			<span className="px-2 py-2">{text}</span>
		</button>
	);
}

export function NumberInput ({
	title="Number", num, setNum,
	min=false, max=false,
	displayFunc = v => v,
	validatorFunc = v => true
}) {

	const inputElement = React.useRef(null);

	React.useEffect(() => {
		//
	}, [num]);

	const validate = v => {
		if (isNaN(v)) return;
		if (min !== false && min > v) return false;
		if (max !== false && max < v) return false;
		return validatorFunc(v) ? true : false;
	};

	const setNumSafe = (v) => {
		if (validate(v)) {
			setNum(v);
			inputElement.current.value = v;
		}
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
			<div className="flex">
				<PlusMinusButton onClick={() => setNumSafe(num-1)} text="-" />
				<input type="text" ref={inputElement} defaultValue={num} onChange={handleChange} className="bg-slate-50 shadow appearance-none border-2 border-blue-200 w-full py-3 px-3 text-base text-gray-700 leading-tight outline-none duration-300 hover:border-blue-500 focus:border-blue-500" />
				<PlusMinusButton onClick={() => setNumSafe(num+1)} />
			</div>
		</div>
	);
}
