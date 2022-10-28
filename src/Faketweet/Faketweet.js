import React from 'react';

import Header from './Header';
import TweetTab from './TweetTab';
import EditorTab from './EditorTab';
import Footer from './Footer';



export default function Faketweet () {
	const [data, setData] = React.useState({
		name: 'Some Dude',
		username: 'SomeDude',
		verified: false,

		content: 'This is a tweet.',

		hours: 10,
		minutes: 10,
		pm: false,

		day: 10,
		month: 10,
		year: 2022,

		client: 'Twitter for iPhone',

		retweets: 0,
		comments: 0,
		likes: 0,
	});

	return (
		<div className="bg-blue-300 border-t-8 border-blue-900">
			<Header />
			<div className="lg:pb-24">
				<div className="max-w-5xl mx-auto lg:flex lg:items-stretch lg:px-4 lg:py-4 lg:space-x-4">
					<div className="lg:w-96">
						<TweetTab {...{data}}/>
					</div>
					<div className="grow">
						<EditorTab {...{data, setData}} />
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}


