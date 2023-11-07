import { useState } from "react"

export const Plot = () => {
	const [isSpoilerShown, setIsSpoilerShown] = useState(false)
	const [isWarningShown, setIsWarningShown] = useState(true)

	const handleSpoilerButtonClick = () => {
		setIsSpoilerShown(true)
		setIsWarningShown(false)
	}

	const handleCloseWarningClick = () => {
		setIsWarningShown(false)
	}
	return (
		<>
			<h2>Fabuła </h2>
			{isWarningShown && (
				<p>
					Uwaga! Opis fabuły zawiera spoilery
					<button onClick={handleCloseWarningClick}>X</button>
				</p>
			)}
			<p>Loki trafa do agencji i podrózuje w czasie(miga)</p>
			{isSpoilerShown ? (
				<p>Kang jest czarny</p>
			) : (
				<button onClick={handleSpoilerButtonClick}>Pokaż spoiler</button>
			)}
		</>
	)
}
