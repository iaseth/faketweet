import React from 'react';



export function ImageInput ({preview, setPreview}) {
	const [selectedFile, setSelectedFile] = React.useState(null);

	React.useEffect(() => {
		if (!selectedFile) {
			return;
		}

		const objectURL = URL.createObjectURL(selectedFile)
		setPreview(objectURL)

		return () => URL.revokeObjectURL(objectURL)
	}, [selectedFile, setPreview])

	const handleChange = (e) => {
		if (e.target.files && e.target.files.length !== 0) {
			setSelectedFile(e.target.files[0]);
		}
	};

	return (
		<div className="flex items-center">
			<div className="w-20 h-20 border-4 border-blue-600 mr-4 rounded-full overflow-hidden">
				{selectedFile &&  <img src={preview} alt="" />}
			</div>
			<div className="">
				<label htmlFor="filePicker" className="block px-6 py-3 bg-blue-500 text-white font-bold border-2 border-blue-600 rounded cursor-pointer">Pick file</label>
				<input id="filePicker" type="file" className="bg-blue-200 p-4 hidden" onChange={handleChange} />
			</div>
		</div>
	);
}
