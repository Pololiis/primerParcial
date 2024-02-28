import style from './styles/form.module.css';

const Form = ({setName, setPokemon, setShow, setError, name, pokemon}) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    if(nameValidator(name) && pokemonValidator(pokemon)) {
      setShow(true);
      setError(false);
    } else {
      setError(true);
    }
  }

  const nameValidator = (name) => {
    if(name.length >= 3 && name[0] != ' ') {
      return true;
    }
    return false;
  }

  const pokemonValidator = (pokemon) => {
    if(pokemon.length >= 6) {
      return true;
    }
    return false;
  }

	return (
		<>
			<form onSubmit={handleSubmit} className={style.formContainer}>
				<label htmlFor="">¿Cuál es tu nombre, entrenador?</label>
				<input type="text" onBlur={(e) => setName(e.target.value)}/>
				<label htmlFor="">¿Cuál es tu compañero pokémon?</label>
				<input type="text" onBlur={(e) => setPokemon(e.target.value)}/>
				<button className={style.btn}>Quiero ver mi tarjeta</button>
			</form>
		</>
	);
};

export default Form;
