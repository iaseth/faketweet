

function FooterLink ({text, href}) {
	return <a href={href} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">{text}</a>;
}

export default function Footer () {
	return (
		<footer className="px-4 py-28 text-center font-bold bg-zinc-900 text-white border-t-4 border-blue-600">
			<h2>Created by <FooterLink text="Ankur Seth" href="https://github.com/iaseth" />.</h2>
			<div className="h-3"></div>
			<h2>View <FooterLink text="Source" href="https://github.com/iaseth/faketweet" />.</h2>
		</footer>
	);
}
