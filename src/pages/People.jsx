import React, { useState, useEffect } from "react";
import axios from "axios";
import Person from "../components/PeopleCard";
import { Row, Col } from "react-bootstrap";

const People = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const fetchPeople = async () => {
      const { data } = await axios.get("//swapi.dev/api/people");

      setPeople(data.results);
      console.log(people);
    };
    fetchPeople();
  }, [people]);

  return (
    <>
      <h3 style={{ textAlign: "center" }}>Click on a card to know more!</h3>
      <Row>
        {people.map((person) => {
          return (
            <Col
              className="align-items-stretch d-flex"
              key={person.index}
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
