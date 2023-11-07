import { useState } from "react"

export const LikesCounter = () => {
	const [likeCounter, setLikeCouter] = useState(50)

	const handleLikeCounter = () => {
		setLikeCouter(previousLikeCounter => previousLikeCounter + 1)
	}

	const handleLoveButton = () => {
		setLikeCouter(previousLikeCounter => previousLikeCounter + 3)
	}

	return (
		<>
			<h2>Liczba polubień: {likeCounter}</h2>
			<button onClick={handleLikeCounter}>Lubie to!</button>
			<button onClick={handleLoveButton}>Kocham to!</button>
		</>
	)
}
