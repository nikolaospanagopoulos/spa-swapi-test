import React, { useState, useEffect } from "react";
import axios from "axios";
import Movie from "../components/cards/Card";
import { Row, Col } from "react-bootstrap";

const Films = () => {
  const [films, setFilms] = useState([]);

//i get the results using axios and the use effect hook . Then i set the state of the films to those results with the use state hook

  useEffect(() => {
    const fetchMovies = async () => {
      const { data } = await axios.get("//swapi.dev/api/films");
      setFilms(data.results);
    };
    fetchMovies();
  }, []);



  //i iterate through the array of results with the map function
  return (
    <>
      <div>
        <h3 className="subtitle">Click on a card to know more!!</h3>
      </div>
      <Row>
        {films.map((film) => {
          return (
            <Col className="" key={film.episode_id} sm={12} md={6} xl={4}>
              <Movie film={film} />
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default Films;
