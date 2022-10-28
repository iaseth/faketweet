import React from 'react';

import Header from './Header';
import TweetTab from './TweetTab';
import EditorTab from './EditorTab';
import Footer from './Footer';



function statDisplayFunc (v) {
	if (v < 1000) return v;

	if (v > 1000000) {
		return (v/1000000).toFixed(1) + 'M';
	} else if (v > 1000) {
		return (v/1000).toFixed(1) + 'K';
	}
}

function monthDisplayFunc (v) {
	const MONTHS = [
		"Jan", "Feb", "Mar",
		"Apr", "May", "Jun",
		"Jul", "Aug", "Sep",
		"Oct", "Nov", "Dec",
	];
	return MONTHS[v-1];
}

export default function Faketweet () {
	const CLIENT_OPTIONS = [
		'Twitter for Fools',
		'Twitter for Android',
		'Twitter for iPhone',
		'Twitter for Web',
	];
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

		client: CLIENT_OPTIONS[0],

		retweets: 40,
		comments: 20,
		likes: 60,
	});

	return (
		<div className="bg-blue-200 border-y-8 border-blue-900">
			<Header />
			<div className="lg:pb-24">
				<div className="max-w-6xl mx-auto lg:flex lg:items-stretch lg:px-4 lg:py-4 lg:space-x-4">
					<div className="lg:w-96">
						<TweetTab {...{data, monthDisplayFunc, statDisplayFunc}}/>
					</div>
					<div className="grow">
						<EditorTab {...{data, setData, monthDisplayFunc, statDisplayFunc, CLIENT_OPTIONS}} />
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}


