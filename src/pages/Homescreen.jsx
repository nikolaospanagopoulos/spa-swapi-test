import React,{useState,useEffect} from 'react';
import Logo from '../components/logo/logo'
import axios from 'axios'
import { CSVLink } from "react-csv";
const Homescreen = () => {
    const [planets,setPlanets] = useState([])
    
    useEffect(()=>{
        const fetchPlanets = async() =>{
            const {data} = await axios.get('//swapi.dev/api/planets?format=wookiee')
            setPlanets(data)
        
        }
        fetchPlanets()
    },[])

    const csvData = planets
    return (
        <div>
            <Logo/>

            <h3 className='title'>You can visit the links on the navbar and see very detailed information about star wars movies. When you click on a resource it will explode with information!</h3>
            <CSVLink data={csvData}><h5 className='download'>Download Planets in Wookie Language</h5></CSVLink>;
        </div>
    );
}
 
export default Homescreen;