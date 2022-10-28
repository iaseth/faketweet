import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';

import './TweetTab.scss';



function DownloadButton ({title, onClick}) {
	return (
		<div onClick={onClick} className="bg-blue-500 border-2 border-blue-600 text-sm font-bold text-white px-4 py-4 rounded shadow text-center cursor-pointer">{title}</div>
	);
}

export default function TweetTab ({data, monthDisplayFunc, statDisplayFunc}) {

	function downloadImage () {
		const e = document.getElementById('TweetBox');
		const filename = `faketweet.png`;
		domtoimage.toBlob(e)
			.then(function (blob) {
				saveAs(blob, filename);
			});
	}

	return (
		<div id="TweetTab" className="px-4 lg:px-0 max-w-lg mx-auto">
			<div id="TweetBox" className="bg-white px-4 py-4">
				<div id="User">
					<div className="flex">
						<div id="UserImage" className="w-12 h-12 bg-blue-300 rounded-full overflow-hidden">
							<div className="h-full w-full bg-red-400"></div>
						</div>
						<div id="UserName" className="px-3">
							<div>
								<span>{data.name}</span>
								<span></span>
							</div>
							<div>@{data.username}</div>
						</div>
					</div>
				</div>

				<div id="Content" className="mt-3">
					<div>{data.content}</div>
				</div>

				<div id="Info">
					<div className="flex">
						<span>{data.hours}:{data.minutes} {data.pm ? 'PM' : 'AM'}</span>
						<span className="px-1">·</span>
						<span>{monthDisplayFunc(data.month)} {data.day}, {data.year}</span>
						<span className="px-1">·</span>
						<span>{data.client}</span>
					</div>
				</div>

				<div id="Stats">
					<div className="flex">
						{data.retweets > 0 && <div>
							<span className="font-bold">{statDisplayFunc(data.retweets)}</span>
							<span>Retweets</span>
						</div>}
						{data.comments > 0 && <div>
							<span className="font-bold">{statDisplayFunc(data.comments)}</span>
							<span>Quote Tweets</span>
						</div>}
						{data.likes > 0 && <div>
							<span className="font-bold">{statDisplayFunc(data.likes)}</span>
							<span>Likes</span>
						</div>}
					</div>
				</div>
			</div>

			<div className="flex ch:basis-0 ch:grow py-4 select-none">
				<div>
					<DownloadButton title="Download PNG" onClick={downloadImage} />
				</div>
				<div></div>
			</div>
		</div>
	);
}
