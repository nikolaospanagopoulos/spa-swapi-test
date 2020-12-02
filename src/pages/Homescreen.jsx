import React,{useState,useEffect} from 'react';
import Logo from '../components/logo/logo'
import axios from 'axios'
import { CSVLink } from "react-csv";
const Homescreen = () => {
    const [planets,setPlanets] = useState([])
    //i get the results using axios and the use effect hook . Then i set the state of the planets to those results with the use state hook
    useEffect(()=>{
        const fetchPlanets = async() =>{
            const {data} = await axios.get('//swapi.dev/api/planets?format=wookiee')
            setPlanets(data)
        
        }
        fetchPlanets()
    },[])


    // I USE THE REACT CSV PACKAGE TO CONVERT THE DATA TO CSV FORMAT
    const csvData = planets
    return (
        <div>
            <Logo/>

            <h3 className='title'>You can visit the links on the navbar and see very detailed information about star wars movies. When you click on a resource it will explode with information!</h3>
            <CSVLink data={csvData}><h4 className='download'>PRESS ME TO Download Planets in Wookie Language!!!</h4></CSVLink>;
        </div>
    );
}
 
export default Homescreen;