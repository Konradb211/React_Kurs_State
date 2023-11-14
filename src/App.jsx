import { LikesCounter } from "./components/LikesCounter"
import { Plot } from "./components/Plot"
import { Form } from "./components/Form"
import "./App.css"
import { Reviews } from "./components/Reviews"
import { useState } from "react"

const initialReviews = [
	{ author: "Brian", text: "Najlepszy film ever!", id: 1 },
	{ author: "Jessica", text: "Nie podobał mi się", id: 2 },
]
function App() {
	const [reviews, setReviews] = useState(initialReviews)
	const [counterShwon, setCounterShown] = useState(true)
	const [likeCounter, setLikeCouter] = useState(50)

	const handleLikeCounter = () => {
		setLikeCouter(previousLikeCounter => previousLikeCounter + 1)
	}

	const handleLoveButton = () => {
		setLikeCouter(previousLikeCounter => previousLikeCounter + 3)
	}

	return (
		<>
			<h1>Loki</h1>
			<h2>Rok produkcji: 2021</h2>
			<button
				onClick={() => setCounterShown(prevCounterShown => !prevCounterShown)}>
				{counterShwon ? "Schowaj counter" : "Pokaż counter"}
			</button>
			{counterShwon && (
				<LikesCounter
					numberOfLikes={likeCounter}
					onLikeButtonClick={handleLikeCounter}
					onLoveButtonClick={handleLoveButton}
				/>
			)}
			<Plot />
			<Reviews reviews={reviews} />
			<Form
				onReviewSubmit={(author, text) =>
					setReviews(prevReviews => {
						return [
							{ author, text, id: prevReviews.length + 1 },
							...prevReviews,
						]
					})
				}
			/>
		</>
	)
}

export default App
