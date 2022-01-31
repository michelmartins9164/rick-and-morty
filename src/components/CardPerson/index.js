import { React, Component } from "react";
import { Link } from "react-router-dom";

export default class CardPerson extends Component {

  constructor(props) {
    super(props);

    this.state = {
      person: [],
      location: []
    }
  }

  componentDidMount() {
    fetch(`https://rickandmortyapi.com/api/character/${this.props.id}`)
      .then((resp) => resp.json())
      .then((json) => {
        this.setState({ person: json });
        console.log(json)

        fetch(`https://rickandmortyapi.com/api/location/${this.props.id}`)
          .then((resp) => resp.json())
          .then((location) => {
            this.setState({ location: location })
          })
      })
  }
  render() {
    return (
      <div className="Container">
        <div className="ContainerCard">
          <Link to="/" className="Close">X</Link>
          <article key={this.state.person.id} className="Article CardArticle">
            <div className="TitleName">
              <h1>
                {this.state.person.name}
              </h1>
            </div>
            <div className="DescriptionPerson">
              <div className=" CardStatus">
                <div>
                  {<img src={this.state.person.image} alt="image capa" />}
                </div>
                <div className="Characteristics">
                  <div className="ItemsDescription">
                  <p className="TitleDescription">status: </p>
                  {
                    this.state.person.status === "Alive" &&
                    <span className="Alive"></span>
                  }

                  {
                    this.state.person.status === "Dead" &&
                    <span className="Dead"></span>
                  }

                  {
                    this.state.person.status === "unknown" &&
                    <span className="Unknown"></span>
                  }
                  </div>

                  <div className="ItemsDescription">
                  <p className="TitleDescription">Raça: </p>
                  <p className="Species">{this.state.person.species}</p>
                  </div>
                  <div className="ItemsDescription">
                    <p className="TitleDescription">Gênero:</p>
                    <p>
                      {this.state.person.gender === 'unknown' && 
                      <span className="Unknown"></span>}
                       {this.state.person.gender !== 'unknown' &&
                        this.state.person.gender}

                      </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="ContainerLocation">
              <div className="DatasLocation">
              <p className="TitleDescription">Localização: </p>
              <p>
                {this.state.location.name === "unknown" &&
                <span className="Unknonw"></span>}

                {this.state.location.name !== "unknown" &&
                  this.state.location.name}
              </p>
              </div>
              <div className="DatasLocation">
                <p className="TitleDescription">Dimensão: </p>
                <p>
                  {this.state.location.dimension === "unknown" && 
                  <span className="Unknown"></span>}
                  
                  {this.state.location.dimension !== "unknown" && 
                  this.state.location.dimension}
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    );
  }
}