import React from 'react';

import {InputBox} from './TextInput';
import {PlusMinusButton} from './common';



export function StatInput ({
	title="Stat", stat, setStat,
	min=false, max=false,
	displayFunc = v => v,
	validatorFunc = v => true
}) {

	const inputElement = React.useRef(null);

	const validate = v => {
		if (isNaN(v)) return;
		if (min !== false && min > v) return false;
		if (max !== false && max < v) return false;
		return validatorFunc(v) ? true : false;
	};

	const setStatSafe = (v) => {
		if (isNaN(v)) return;

		v = parseInt(v);
		if (validate(v)) {
			setStat(v);
			inputElement.current.value = v;
		}
	};

	const handleChange = event => {
		const value = event.target.value.trim();
		setStatSafe(value);
	};

	return (
		<div>
			<div>
				<h2 className="px-2 py-2 text-center">
					<span className="font-bold mr-2">{displayFunc(stat)}</span>
					<span className="text-sm">{title}</span>
				</h2>
			</div>
			<div className="flex">
				<PlusMinusButton onClick={() => setStatSafe(stat/2)} text="-" />
				<input type="text" ref={inputElement} defaultValue={stat} onChange={handleChange} className="bg-slate-50 shadow appearance-none border-2 border-blue-200 w-full py-3 px-3 text-base text-gray-700 leading-tight outline-none duration-300 hover:border-blue-500 focus:border-blue-500" />
				<PlusMinusButton onClick={() => setStatSafe(stat*2)} />
			</div>
		</div>
	);
}
