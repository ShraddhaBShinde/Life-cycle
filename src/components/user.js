import React, {useState, useEffect} from "react";

const User = (props) => {
  const [planet, setPlanet] = useState("Earth");
      //variable  ownfuntion(updating state)

  //componentDidMount
  useEffect(()=> { //updating
    console.log("Component mounting!");
  }, []) //[] -> empty array (things will go on repeating unnecessarily, empty array avoids this)
 
  //componentDidUpdate
  useEffect(()=> { //checking
    console.log("Component changes");
  }, [planet]);
  return(
    <div>
      <h1>{props.name}</h1>
      <p>{props.description}</p>
      <button onClick={() => setPlanet("Mercury")}>{planet}</button>
    </div>
  )
}


export default User;

/*class User extends React.Component { //user component is becoming class component
  constructor(props) {
    super(props);

    this.state = { //a state is a set  of data that an individual component can hold
      planet: "earth"
    };
    console.log("Construstor!");
  }
componentDidMount() {
  this.setState({planet: "Mars"}); //setState -> updating
  console.log("componentDidMount!");
}
  render() { //logic
    console.log("Render!");
    return ( 
      <div>
        <h1>{this.props.name}</h1>
        <h4>{this.props.description}</h4>
        <h4>{this.state.planet}</h4>   
        </div>
    );
  }

}*/
//props-> properties/parameters ->  data is passed from the user(one) component to app(other) component

/*LIFE CYCLE METHODS
1)MOUNT: Component is initially rendered in your DOM
->constructor, render, componentDidMount (side effects/changes)
2)UPDATE: Component is being updated
3)UNMOUNT: Component is removed from DOM
*/ 

//Hooks enable use of states in your functional component
//popular hooks in react ->useState(initialize the state) ->useEffect hooks (you need to import it from react(destructure and import it)) 
