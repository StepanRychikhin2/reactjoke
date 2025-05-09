import JokesList from './JokeList.tsx'
import FaforiteJokeList from './FaforiteJoke.tsx'
import css from  "./style.module.css";

const Main = () => {
return< >
<div className={css.main}>
    <JokesList></JokesList>
<FaforiteJokeList></FaforiteJokeList>
</div>


</>
}


export default Main