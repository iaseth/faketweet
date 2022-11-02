import React from 'react';

import {
	NumberInput,
	SelectInput,
	StatInput,
	TextBoxInput,
	TextInput,
	ToggleInput,
} from '../Utils';



export function InputGroupContainer ({title=false, expand=false, children}) {
	const [expanded, setExpanded] = React.useState(expand);

	return (
		<div className="mb-8 rounded shadow overflow-hidden">
			{title && <div className="bg-blue-600 text-white cursor-pointer select-none" onClick={() => setExpanded(!expanded)}>
				<h2 className="px-2 py-4 text-sm font-bold text-center">{title}</h2>
			</div>}
			{(title === false || expanded) && <div className="md:flex ch:grow ch:basis-0 bg-white py-3 ch:px-5 ch:py-3">{children}</div>}
		</div>
	);
}



export default function EditorTab ({
	data, setData,
	minuteDisplayFunc, monthDisplayFunc, statDisplayFunc, CLIENT_OPTIONS
}) {

	const setX = (x, v) => {
		setData({...data, [x]: v});
	};

	return (
		<div className="px-4 py-4 lg:px-0 lg:py-0">
			<InputGroupContainer title="User" expand={true}>
				<TextInput title="Name" text={data.name} setText={v => setX('name', v)} min={1} max={50} />
				<TextInput title="Username" text={data.username} setText={v => setX('username', v)} min={1} max={50} />
				<ToggleInput title="Verified account" toggle={data.verified} setToggle={v => setX('verified', v)} />
			</InputGroupContainer>

			<InputGroupContainer title="Content">
				<TextBoxInput title="Tweet" text={data.content} setText={v => setX('content', v)} min={1} max={280} />
				<SelectInput title="Client" OPTIONS={CLIENT_OPTIONS} option={data.client} setOption={v => setX('client', v)} min={3} max={50} />
			</InputGroupContainer>

			<InputGroupContainer title="Time">
				<NumberInput title="Hour" num={data.hours} setNum={v => setX('hours', v)} min={0} max={12} />
				<NumberInput title="Minute" num={data.minutes} setNum={v => setX('minutes', v)} min={0} max={59} displayFunc={minuteDisplayFunc} />
				<ToggleInput title="PM" toggle={data.pm} setToggle={v => setX('pm', v)} />
			</InputGroupContainer>

			<InputGroupContainer title="Date">
				<NumberInput title="Day" num={data.day} setNum={v => setX('day', v)} min={1} max={31} />
				<NumberInput title="Month" num={data.month} setNum={v => setX('month', v)} min={1} max={12} displayFunc={monthDisplayFunc} />
				<NumberInput title="Year" num={data.year} setNum={v => setX('year', v)} min={-1000} max={2200} />
			</InputGroupContainer>

			<InputGroupContainer title="Stats">
				<StatInput title="retweets" stat={data.retweets} setStat={v => setX('retweets', v)} displayFunc={statDisplayFunc} />
				<StatInput title="comments" stat={data.comments} setStat={v => setX('comments', v)} displayFunc={statDisplayFunc} />
				<StatInput title="likes" stat={data.likes} setStat={v => setX('likes', v)} displayFunc={statDisplayFunc} />
			</InputGroupContainer>
		</div>
	);
}
