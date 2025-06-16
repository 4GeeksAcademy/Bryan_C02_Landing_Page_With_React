import React from "react";
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Card from "./Card.jsx";
import Footer from "./Footer.jsx"

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component

const Home = () => {

	const cardData = [
		{
			image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpdC1KCOzufYqTtkzkNzIPihFn-ffCuXZOWw&s",
			title: "Card 1",
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			buttonLabel: "Find Out More!",
		},
		{
			image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpdC1KCOzufYqTtkzkNzIPihFn-ffCuXZOWw&s",
			title: "Card 2",
			text: "Sapiente esse necessitatibus neque.",
			buttonLabel: "Find Out More!",
		},
		{
			image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpdC1KCOzufYqTtkzkNzIPihFn-ffCuXZOWw&s",
			title: "Card 3",
			text: "Explicabo magni sapiente, tempore debitis beatae culpa.",
			buttonLabel: "Find Out More!",
		},
		{
			image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpdC1KCOzufYqTtkzkNzIPihFn-ffCuXZOWw&s",
			title: "Card 4",
			text: "Natus architecto.",
			buttonLabel: "Find Out More!",
		},
	];

	return (
		<>
			<Navbar />

			<Jumbotron />
			<div className="container my-5">
				<div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
					{cardData.map((card, index) => (
						<Card
							key={index}
							image={card.image}
							title={card.title}
							text={card.text}
							buttonLabel={card.buttonLabel}
						/>
					)
					)}
				</div>
			</div>

			<Footer/>
		</>
	);
};

export default Home;