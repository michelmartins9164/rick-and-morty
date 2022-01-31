import { React, Component } from "react";
import { Link } from "react-router-dom";
import './style.css';

export default class Home extends Component {

    constructor(props) {
        super(props);
            this.state = {
                persons: []
            }
        
    }

    componentDidMount() {
        fetch('https://rickandmortyapi.com/api/character')
        .then((r) => r.json())
        .then((json) => {
            this.setState({persons:json.results})
            console.log(this.state.persons)
        })
    }

    
    render() {
        return(
            <div className="Container">
        {
            this.state.persons.map((item) => {   
                
                return(
                    <article key={item.id} className="Article">
                        <div>
                        <Link to={`/person/${item.id}`}><img src={item.image} alt="image capa"/></Link>
                        </div>
                        
                        <div className="DescriptionPerson">
                            <a>{item.name}</a>
                            <div className="DescriptionStatus">
                                <h2 className="Species">{item.species}</h2>
                            </div>
                        </div>
                    </article>
                )
            })
        }
      </div>
    );
  }
}