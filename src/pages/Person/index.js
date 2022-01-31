import { React } from "react";
import { useParams } from "react-router-dom";
import CardPerson from "../../components/CardPerson";

export default function Person() {

    const { id } = useParams();

    fetch(`https://rickandmortyapi.com/api/character/${id}`);

    return(
        <div>
            <CardPerson id={id}/>
        </div>
    )
}