import React from "react";
import "./App.css";
import CardList from "./components/CardList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [],
      filters: {
        genres: [],
        cities: []
      }
    };
    this.fetch();
    this.handleClick=this.handleClick.bind(this);
  }
  fetch() {
    fetch("https://randomuser.me/api/?results=50")
      .then(res => res.json())
      .then(data => {
        this.setState({ people: data.results });
      });
  }
  handleClick(event) {
    const inputGender= event.currentTarget.checked;
    if (inputGender){
      this.setState(prevState => {
        return {
          filters:{
            ...prevState.filters,
            genres: prevState.filters.genres.concat('female')
          }
        }    
      });
    }else {
      this.setState(prevState => {
        return {
          filters:{
            ...prevState.filters,
            genres: prevState.filters.genres.filter(item=> item !== 'female')
          }
        }    
      });
    }
  }
  render() {
    const people = this.state.people;

    return (
      <div className="App">
        <input
          type="checkbox"
          name="gender"
          id="female"
          value="female"
          onClick={this.handleClick}
        />
        <label htmlFor="female">Female</label>
        <input type="checkbox" name="gender" id="male" value="male" />
        <label htmlFor="male">Male</label>
        <CardList people={people} />
      </div>
    );
  }
}

export default App;
