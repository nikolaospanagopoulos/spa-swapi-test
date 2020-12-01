
import React,{useState,useEffect} from 'react';
import axios from 'axios'
import Movie from '../components/Card'


const Films = () => {
    const [films,setFilms] = useState([])
   
    useEffect(()=>{
        const fetchMovies = async() =>{
            const {data} = await axios.get('https://swapi.dev/api/films')
            setFilms(data.results)
        console.log(films)
        }
        fetchMovies()
    },[films])


    return (
        <div>
            {films.map((film)=>{
                return (
                    <Movie key={film.episode_id} film={film}/>
                )
            })}
        </div>
    );
}
 
export default Films;