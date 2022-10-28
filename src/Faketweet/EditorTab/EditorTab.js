import {
	NumberInput,
	StatInput
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
		<div className="min-h-screen bg-white rounded px-4 py-4">
			<h2>EditorTab</h2>
			<div className="lg:flex overflow-hidden py-4">
				<NumberInput title="day" num={data.day} setNum={v => setX('day', v)} min={1} max={31} />
				<NumberInput title="month" num={data.month} setNum={v => setX('month', v)} min={1} max={12} />
				<NumberInput title="year" num={data.year} setNum={v => setX('year', v)} min={-1000} max={2200} />
			</div>
			<div className="lg:flex overflow-hidden py-4">
				<StatInput title="retweets" stat={data.retweets} setStat={v => setX('retweets', v)} displayFunc={statDisplayFunc} />
				<StatInput title="comments" stat={data.comments} setStat={v => setX('comments', v)} displayFunc={statDisplayFunc} />
				<StatInput title="likes" stat={data.likes} setStat={v => setX('likes', v)} displayFunc={statDisplayFunc} />
			</div>
		</div>
	);
}
