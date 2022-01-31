import { React, Component } from "react";
import './style.css'
export default class Header extends Component {
    render() {
        return(
            <header className="Header">
                <div>
                    <img src={"/icons/logo-rick-and-morty.png"} alt="capa"/>
                </div>
            </header>
        );
    }
}