import React,{useState,useEffect} from 'react';
import axios from 'axios'
import Person from '../components/PeopleCard'


const People= () => {
    const [people,setPeople] = useState([])
   
    useEffect(()=>{
        const fetchPeople = async() =>{
            const {data} = await axios.get('https://swapi.dev/api/people')
       
            setPeople(data.results)
        console.log(people)
        }
        fetchPeople()
    },[people])


    return (
        <div>
            {people.map((person)=>{
                return (
                    <Person key={person.index} person={person}/>
                )
            })}
        </div>
    );
}
 
export default People;