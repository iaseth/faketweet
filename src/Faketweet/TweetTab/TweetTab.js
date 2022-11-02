import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';



function DownloadButton ({title, onClick}) {
	return (
		<div onClick={onClick} className="bg-blue-500 border-2 border-blue-600 text-sm font-bold text-white px-4 py-4 rounded shadow text-center cursor-pointer">{title}</div>
	);
}

export default function TweetTab ({data, minuteDisplayFunc, monthDisplayFunc, statDisplayFunc}) {

	function downloadImage () {
		const e = document.getElementById('TweetBox');
		const filename = `faketweet.png`;
		domtoimage.toBlob(e)
			.then(function (blob) {
				saveAs(blob, filename);
			});
	}

	const boxStyles = {
		fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
	};

	return (
		<div id="TweetTab" className="px-4 lg:px-0 max-w-lg mx-auto sticky top-4">
			<div id="TweetBox" className="bg-white px-4 py-4 whitespace-nowrap shadow" style={boxStyles}>
				<div id="User">
					<div className="flex">
						<div id="UserImage" className="w-12 h-12 bg-blue-300 rounded-full overflow-hidden">
							<div className="h-full w-full bg-red-400"></div>
						</div>
						<div id="UserName" className="px-3 text-[15px]">
							<div>
								<span className="font-bold" style={{color: 'rgb(15, 20, 25)'}}>{data.name}</span>
								<span></span>
							</div>
							<div>
								<span className="font-normal" style={{color: 'rgb(83, 100, 113)'}}>@{data.username}</span>
							</div>
						</div>
					</div>
				</div>

				<div id="Content" className="mt-3 text-[23px] overflow-hidden whitespace-normal" style={{color: 'rgb(15, 20, 25)'}}>
					<div>{data.content.trim().split('\n').map((p, k) => <p key={k} className="min-h-[34px]">{p}</p>)}</div>
				</div>

				<div id="Info" className="text-[15px] py-[15px]" style={{color: 'rgb(83, 100, 113)'}}>
					<div className="flex">
						<span>{data.hours}:{minuteDisplayFunc(data.minutes)} {data.pm ? 'PM' : 'AM'}</span>
						<span className="px-1">·</span>
						<span>{monthDisplayFunc(data.month)} {data.day}, {data.year}</span>
						<span className="px-1">·</span>
						<span>{data.client}</span>
					</div>
				</div>

				<div id="Stats" className="text-[14px] px-[5px] py-[15px] border-y" style={{color: 'rgb(83, 100, 113)', borderColor: 'rgb(239, 243, 244)'}}>
					<div className="flex ch:mr-[15px]">
						{data.retweets > 0 && <div>
							<span className="font-bold mr-[4px]" style={{color: 'rgb(15, 20, 25)'}}>{statDisplayFunc(data.retweets)}</span>
							<span>Retweets</span>
						</div>}
						{data.comments > 0 && <div>
							<span className="font-bold mr-[4px]" style={{color: 'rgb(15, 20, 25)'}}>{statDisplayFunc(data.comments)}</span>
							<span>Quote Tweets</span>
						</div>}
						{data.likes > 0 && <div>
							<span className="font-bold mr-[4px]" style={{color: 'rgb(15, 20, 25)'}}>{statDisplayFunc(data.likes)}</span>
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
