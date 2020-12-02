import React, { useState, useEffect } from "react";
import axios from "axios";
import Person from "../components/cards/PeopleCard";
import { Row, Col } from "react-bootstrap";

const People = () => {
  const [people, setPeople] = useState([]);


//i get the results using axios and the use effect hook . Then i set the state of the people to those results with the use state hook


  useEffect(() => {
    const fetchPeople = async () => {
      const { data } = await axios.get("//swapi.dev/api/people");

      setPeople(data.results);
      
    };
    fetchPeople();
  }, []);



  //i iterate through the array of results with the map function

  return (
    <>
      <h3 className='subtitle'>Click on a card to know more!</h3>
      <Row>
        {people.map((person) => {
          return (
            <Col
              className=""
              key={person.height}
              sm={12}
              md={6}
              xl={4}
            >
              <Person person={person} />
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default People;
