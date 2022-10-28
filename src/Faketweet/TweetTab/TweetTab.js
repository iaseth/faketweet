import './TweetTab.scss';



export default function TweetTab ({data, monthDisplayFunc, statDisplayFunc}) {

	return (
		<div id="TweetTab" className="px-4 lg:px-0">
			<div id="TweetBox" className="bg-white px-4 py-4 max-w-lg mx-auto">
				<div id="User">
					<div className="flex">
						<div id="UserImage" className="w-12 h-12 bg-blue-300 rounded-full">
							<img src="" alt="" />
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
						<div>
							<span>{data.hours}</span>
							<span>:</span>
							<span>{data.minutes}</span>
							<span> </span>
							<span>{data.pm ? 'PM' : 'AM'}</span>
						</div>
						<div className="px-1">
							<span>·</span>
						</div>
						<div>
							<span>{monthDisplayFunc(data.month)}</span>
							<span> </span>
							<span>{data.day}</span>
							<span>, </span>
							<span>{data.year}</span>
						</div>
						<div className="px-1">
							<span>·</span>
						</div>
						<div>
							<span>{data.client}</span>
						</div>
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
		</div>
	);
}
