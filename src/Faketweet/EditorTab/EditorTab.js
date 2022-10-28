import {StatInput} from './Utils';



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
				<StatInput title="retweets" stat={data.retweets} setStat={v => setX('retweets', v)} displayFunc={statDisplayFunc} />
				<StatInput title="comments" stat={data.comments} setStat={v => setX('comments', v)} />
				<StatInput title="likes" stat={data.likes} setStat={v => setX('likes', v)} />
			</div>
		</div>
	);
}
