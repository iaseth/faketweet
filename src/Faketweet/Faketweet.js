import EditorTab from './EditorTab';
import TweetTab from './TweetTab';

import Header from './Header';
import Footer from './Footer';



export default function Faketweet () {
	
	return (
		<div className="bg-blue-300 border-t-8 border-blue-900">
			<Header />
			<div className="lg:pb-24">
				<div className="max-w-5xl mx-auto lg:flex lg:items-stretch lg:px-4 lg:py-4 lg:space-x-4">
					<div className="lg:w-96">
						<TweetTab />
					</div>
					<div className="grow">
						<EditorTab />
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}


