import Card from "./components/Card";
import Form from "./components/Form";
import { useState } from "react";
import style from "./components/styles/app.module.css"

function App() {
	const [name, setName] = useState("");
	const [pokemon, setPokemon] = useState("");
	const [show, setShow] = useState(false);
	const [error, setError] = useState(false);

	return (
		<div className={style.principalContainer}>
			{show ? (
				<Card name={name} pokemon={pokemon} />
			) : (
				<div>
					<h1>Tarjeta de Entrenador Pokémon</h1>
					<Form
						setName={setName}
						setPokemon={setPokemon}
						setShow={setShow}
						setError={setError}
						name={name}
						pokemon={pokemon}
					/>
				</div>
			)}
			{error && <p style={{color:'red', fontWeight:'bolder'}}>Por favor chequea que la información sea correcta.</p>}
		</div>
	);
}

export default App;
