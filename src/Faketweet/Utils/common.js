


export function PlusMinusButton ({text="+", onClick}) {
	return (
		<button onClick={onClick} className="w-20 bg-blue-500 text-white border-2 border-blue-600 cursor-pointer font-bold first:rounded-l last:rounded-r">
			<span className="px-2 py-2">{text}</span>
		</button>
	);
}
