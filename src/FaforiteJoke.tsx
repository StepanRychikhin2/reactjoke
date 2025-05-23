import { useEffect, useState } from 'react'
import axios from 'axios'
import css from './style.module.css'
interface fafJokeLIst {
	id: number
	type?: string
	setup: string
	punchline: string
}
type jokeFaf = {
	id: number
	type?: string
	setup: string
	punchline: string
}

const FaforiteJokeList: React.FC = () => {
	const [fafjokes, setFavJokes] = useState<fafJokeLIst[]>([])


function deleteJoke(jokeid:number) {
		axios
			.delete(`https://681e057ac1c291fa6632ae53.mockapi.io/jokes/${jokeid}`)
			.then(function (response) {
				console.log(response)
			})
			.catch(function (error) {
				console.log(error)
			})


			axios
			.get('https://681e057ac1c291fa6632ae53.mockapi.io/jokes')
			.then(function (response) {
				setFavJokes(response.data)
			})
			.catch(function (error) {
				console.log(error)
			})
	}

	useEffect(() => {
		axios
			.get('https://681e057ac1c291fa6632ae53.mockapi.io/jokes')
			.then(function (response) {
				setFavJokes(response.data)
			})
			.catch(function (error) {
				console.log(error)
			})
	}, [])

	return (
		<>
			<ul className={css.jokelist}>
				{fafjokes.map((data) => {
					return (
						<li className={css.itemjoke} id={data.id.toString()}>
							<h2>{data.setup}</h2>
							<p>{data.punchline}</p>
							<span>id:{data.id}</span>
							<button className={css.btnJoke} onClick={() => deleteJoke(data.id)}>delete</button>
						</li>
					)
				})}
			</ul>
		</>
	)
}
export default FaforiteJokeList
