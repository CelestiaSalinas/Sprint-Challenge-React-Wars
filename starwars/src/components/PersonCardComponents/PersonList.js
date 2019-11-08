import React, { useState, useEffect } from "react";
import axios from "axios";
import PersonCard from "./PersonCard";
export default function PersonList() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    axios
      .get(`https://lambda-swapi.herokuapp.com/api/people/`)
      .then(response => {
        console.log(response.data);
        setPeople(response.data.results);
      })
      .catch(error => {
        console.log("the data was not return", error);
      });
  }, []);
  return (
    <div className="person">
      {people.map(people => {
        return (
          <PersonCard
            key={people.name}
            name={people.name}
            gender={people.gender}
          />
        );
      })}
    </div>
  );
}
