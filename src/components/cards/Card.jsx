import React,{useState} from 'react';


import {Card} from 'react-bootstrap'



const Movie=({film})=>{
    const [showResults,setShowResults] = useState(false)
    const toggle =() =>{
        setShowResults(showResults=>!showResults)
    }
    return(
        <Card onClick={()=>toggle()}  className="my-3 p-3 rounded" style={{cursor:'pointer'}}>
           <h3> Movie Title:{film.title}</h3>
            <h4>Director: {film.director}</h4>
            <h4>Release Date: {film.release_date}</h4>

            <div>Planets:
            <p>{showResults && film.planets.length }</p>
            <p>{showResults && film.planets }</p>
            </div>

            <div>Characters:
            <p>{showResults && film.characters.length }<br/></p>
            <p>{showResults && film.characters }</p>
            </div>

            <div>Spaceships:
            <p>{showResults && film.starships.length }<br/></p>
            <p>{showResults && film.starships }</p>
            </div>

            <div>Vehicles:
            <p>{showResults && film.vehicles.length }<br/></p>
            <p>{showResults && film.vehicles }</p>
            </div>
            
        </Card>
    )
}

export default Movie