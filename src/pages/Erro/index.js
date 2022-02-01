import { React, Component } from "react";
import { Link } from "react-router-dom";

export default class Erro extends Component {
  render() {
    return(
      <div className="DescriptionPerson">
          <h1>OPS! parece que nada foi encontrado !</h1>
          <Link to="/" className="ReturnHome">Ir para Home</Link>
      </div>
    );
  }
}