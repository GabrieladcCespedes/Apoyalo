/**Crea un componente PersonCardque acepte las siguientes propiedades: 

firstName
lastName
age
hairColor
Luego, utilizando props,  muestra cuatro componentes PersonCardque señalen a cuatro personas diferentes.*/

import { Component } from "react"

class PersonCard extends Component {
    constructor(props) {
        super(props);
    }
    render(){
        return (
            <>
            <h2>{this.props.lastName}, {this.props.firstName} </h2>
            <p>Age: {this.props.age}</p>
            <p>Hair Color: {this.props.hairColor}</p>
            </>
        )
    }
}
export default PersonCard;