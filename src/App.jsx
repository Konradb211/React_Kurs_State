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

	return (
		<>
			<h1>Loki</h1>
			<h2>Rok produkcji: 2021</h2>
			<LikesCounter />
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
