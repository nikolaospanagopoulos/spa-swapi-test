import React,{useState} from 'react';


import {Card} from 'react-bootstrap'


const Person=({person})=>{
    const [showResults,setShowResults] = useState(false)
    const toggle =() =>{
        setShowResults(showResults=>!showResults)
    }
    return(
        <>
        
        <Card onClick={()=>toggle()} className="my-3 p-3 rounded" style={{cursor:'pointer'}}>
           <h3> Character:{person.name}</h3>
            <p>height:{person.height}cm</p>
            <p>mass:{person.mass}kg</p>
            <p>hair{person.hair_color}</p>
            <p>Year of birth:{person.birth_year}</p>
            <p>gender:{person.gender}</p>
    <p>homeowrld : {person.homeworld}</p>


            <div onClick={()=>toggle()}>Films:
            <p> {showResults && person.films.length} </p>
            <p>{showResults && person.films} </p>
            </div>

            <div onClick={()=>toggle()}>vehicles:
            <p> {showResults && person.vehicles.length} </p>
            <p>{showResults && person.vehicles} </p>
            </div>

            <div onClick={()=>toggle()}>Spaceships:
            <p> {showResults && person.starships.length} </p>
            <p>{showResults && person.starships} </p>
            </div>

            <div onClick={()=>toggle()}>Vegicles:
            <p><br/></p>
            <p></p>
            </div>
            <Card.Body>
            
            
       
            <Card.Text as='div'>
                
            </Card.Text>

            </Card.Body>
        </Card>
        </>
    )
}

export default Person