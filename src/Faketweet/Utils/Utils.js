export {ToggleInput} from './ToggleInput';
export {SelectInput} from './SelectInput';
export * from './TextInput';



export function InputGroupContainer ({children}) {
	return (
		<div className="md:flex md:items-end ch:grow ch:basis-0 bg-blue-200 mb-4 px-3 py-5 ch:px-2 ch:py-2">{children}</div>
	);
}


