import React from "react";
import "./App.css";
import CardList from "./components/CardList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      people: []
    };
    this.fetch();
  }
  fetch() {
    fetch("https://randomuser.me/api/?results=50")
      .then(res => res.json())
      .then(data => {
        this.setState({ people: data.results });
      });
  }
  render() {
    const people = this.state.people;

    return (
      <div className="App">
        <CardList people={people} />
      </div>
    );
  }
}

export default App;
