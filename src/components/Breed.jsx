import React from "react";
import axios from "axios";

class Breed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgPath: undefined // image photo undefined au début
    };
  }

  handleClick = () => {
    //console.log(this.props.name);
    axios
      .create({
        baseURL: "https://dog.ceo/api/",
        timeout: 1000
      })
      .get(`breed/${this.props.name}/images/random`)
      .then(response => {
        // console.log("toto")
        //console.log(response.data.message)
        this.setState({ imgPath: response.data.message });
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  render() {
    if (this.state.imgPath === undefined) {
      // si image dispo il faut l'afficher
      return <li onClick={this.handleClick}>{this.props.name}</li>;
    } else {
      return (
        <li onClick={this.handleClick}>
          <img src={this.state.imgPath} alt={this.props.name} />
        </li>
      );
    }
  }
}

export default Breed;
