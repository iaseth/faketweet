import {
	InputGroupContainer,
	TextInput,
	NumberInput,
	StatInput,
} from './Utils';



function statDisplayFunc (v) {
	if (v < 1000) return v;

	if (v > 1000000) {
		return (v/1000000).toFixed(1) + 'M';
	} else if (v > 1000) {
		return (v/1000).toFixed(1) + 'K';
	}
}

export default function EditorTab ({data, setData}) {

	const setX = (x, v) => {
		setData({...data, [x]: v});
	};

	return (
		<div className="min-h-screen bg-blue-100 rounded px-4 py-4">
			<InputGroupContainer>
				<TextInput title="Name" text={data.name} setText={v => setX('name', v)} min={1} max={50} />
				<TextInput title="Username" text={data.username} setText={v => setX('username', v)} min={1} max={50} />
			</InputGroupContainer>

			<InputGroupContainer>
				<NumberInput title="Hour" num={data.hours} setNum={v => setX('hours', v)} min={0} max={12} />
				<NumberInput title="Minute" num={data.minutes} setNum={v => setX('minutes', v)} min={0} max={59} />
			</InputGroupContainer>

			<InputGroupContainer>
				<NumberInput title="day" num={data.day} setNum={v => setX('day', v)} min={1} max={31} />
				<NumberInput title="month" num={data.month} setNum={v => setX('month', v)} min={1} max={12} />
				<NumberInput title="year" num={data.year} setNum={v => setX('year', v)} min={-1000} max={2200} />
			</InputGroupContainer>

			<InputGroupContainer>
				<StatInput title="retweets" stat={data.retweets} setStat={v => setX('retweets', v)} displayFunc={statDisplayFunc} />
				<StatInput title="comments" stat={data.comments} setStat={v => setX('comments', v)} displayFunc={statDisplayFunc} />
				<StatInput title="likes" stat={data.likes} setStat={v => setX('likes', v)} displayFunc={statDisplayFunc} />
			</InputGroupContainer>
		</div>
	);
}
