
import React,{useState,useEffect} from 'react';
import axios from 'axios'
import Movie from '../components/Card'
import {Row,Col} from 'react-bootstrap'

const Films = () => {
    const [films,setFilms] = useState([])
   
    useEffect(()=>{
        const fetchMovies = async() =>{
            const {data} = await axios.get('//swapi.dev/api/films')
            setFilms(data.results)
        
        }
        fetchMovies()
    },[])


    return (
        <>
        <div>
            <h3 className='subtitle'>Click on a card to know more!!</h3>
        </div>
        <Row>
            {films.map((film)=>{
                return (
                    <Col className='' key={film.episode_id}  sm={12} md={6} xl={4}>
                    <Movie  film={film}/>
                    </Col>
                    
                )
            })}
        </Row>
        </>
    );
}
 
export default Films;