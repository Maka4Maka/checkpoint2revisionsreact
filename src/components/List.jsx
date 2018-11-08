import React from "react";
import axios from "axios";
import Breed from "./Breed";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      races: ["caniche", "corgi"]
    };
  }

  componentDidMount() {
    axios
      .create({
        baseURL: "https://dog.ceo/api/", //mettre debut de la route
        timeout: 1000
      })
      .get("/breeds/list/all") //mettre l'autre bout de l'adresse
      .then(response => {
        const newRaces = Object.getOwnPropertyNames(response.data.message);
        this.setState({ races: newRaces });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    return (
      <ul>
        {this.state.races.map(race => {
          //return <li key={race}>{race}</li>;
          return <Breed key={race} name={race} />;
        })}
      </ul>
    );
  }
}

export default List;
