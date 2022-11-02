import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';



function VerifiedBadge () {
	return (
		<svg viewBox="0 0 24 24" role="img" style={{fill: 'rgb(29, 155, 240)'}}>
			<g>
				<path d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.66-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.91-.2-3.92.81s-1.26 2.52-.8 3.91c-1.31.67-2.2 1.91-2.2 3.34s.89 2.67 2.2 3.34c-.46 1.39-.21 2.9.8 3.91s2.52 1.26 3.91.81c.67 1.31 1.91 2.19 3.34 2.19s2.68-.88 3.34-2.19c1.39.45 2.9.2 3.91-.81s1.27-2.52.81-3.91c1.31-.67 2.19-1.91 2.19-3.34zm-11.71 4.2L6.8 12.46l1.41-1.42 2.26 2.26 4.8-5.23 1.47 1.36-6.2 6.77z"></path>
			</g>
		</svg>
	);
}

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
							<div className="flex">
								<div className="font-bold" style={{color: 'rgb(15, 20, 25)'}}>{data.name}</div>
								<div className="ml-1 w-5 h-5">
									{data.verified && <VerifiedBadge />}
								</div>
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
