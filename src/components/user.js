import React from "react";

class User extends React.Component { //user component is becoming class component
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

}


export default User;

//props-> properties/parameters ->  data is passed from the user(one) component to app(other) component

/*LIFE CYCLE METHODS
1)MOUNT: Component is initially rendered in your DOM
->constructor, render, componentDidMount (side effects/changes)
2)UPDATE: Component is being updated
3)UNMOUNT: Component is removed from DOM
*/ 