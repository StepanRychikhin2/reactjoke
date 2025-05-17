import { FC, useState } from 'react'
import { JokeSchema } from './JokeList'
import css from './style.module.css'
import axios from 'axios'
// interface JokeItemData {
//   id: number;
//   setup: string;
//   punchline: string;
// }

const Joke: FC<JokeSchema> = ({ id, setup, punchline }) => {
const [awd, setAwd] = useState<unknown>(null)

	type Joker = {
		id: number | string
		setup: string
		punchline: string
	}
	const joke: Joker = {
		id: id,
		setup: setup,
		punchline: punchline,
	}

	function postToFaforite() {
		axios
			.post('https://681e057ac1c291fa6632ae53.mockapi.io/jokes', joke)
			.then(function (response) {

				// setAwd(response)
				window.location.reload(); 
				console.log(response)
			})
			.catch(function (error) {
				console.log(error)
			})


			
	}

	return (
		<li className={css.itemjoke} id={id.toString()}>
			<h2>{setup}</h2>
			<p>{punchline}</p>
			<span>id:{id}</span>
			<button className={css.btnJoke} onClick={(w) => postToFaforite()}>
				add to faforite
			</button>
		</li>
	)
}
export default Joke
// localStorage.setItem('jokeFaf', joke)
