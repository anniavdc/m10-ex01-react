import React from "react";
import "./App.css";
import CardList from "./components/CardList";
import Input from "./components/Input";

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
    this.handleClick = this.handleClick.bind(this);
    this.handleCityClick = this.handleCityClick.bind(this);
    this.genderFilter = this.genderFilter.bind(this);
  }
  fetch() {
    fetch("https://randomuser.me/api/?results=50")
      .then(res => res.json())
      .then(data => {
        this.setState({ people: data.results });
      });
  }
  handleClick(event) {
    const inputValue = event.currentTarget.value;
    const inputGender = event.currentTarget.checked;
    console.log(inputValue);
    
    if (inputGender) {
      this.setState(prevState => {
        return {
          filters: {
            ...prevState.filters,
            genres: prevState.filters.genres.concat(inputValue)
          }
        };
      });
    } else {
      this.setState(prevState => {
        return {
          filters: {
            ...prevState.filters,
            genres: prevState.filters.genres.filter(item => item !== inputValue)
          }
        };
      });
    }
  }
  genderFilter() {
    if (
      this.state.filters.genres.includes("female") &&
      this.state.filters.genres.includes("male")
    ) {
      return this.state.people;
    } else if (this.state.filters.genres.includes("female")) {
      return this.state.people.filter(person => person.gender === "female");
    } else if (this.state.filters.genres.includes("male")) {
      return this.state.people.filter(person => person.gender === "male");
    } else {
      return this.state.people;
    }
  }
  handleCityClick(event) {
    const inputValue = event.currentTarget.value;
    const inputCity = event.currentTarget.checked;

    if (inputCity) {
      this.setState(prevState => {
        return {
          filters: {
            ...prevState.filters,
            cities: prevState.filters.cities.concat(inputValue)
          }
        };
      });
    } else {
      this.setState(prevState => {
        return {
          filters: {
            ...prevState.filters,
            cities: prevState.filters.cities.filter(item => item !== inputValue)
          }
        };
      });
    }
  }
  render() {
    const people = this.state.people;
    
    return (
      <div className="App">
        <Input 
        type="checkbox"
        name="gender"
        id="female"
        value="female"
        handleClick={this.handleClick}/> 
        <Input 
        type="checkbox"
        name="gender"
        id="male"
        value="male"
        handleClick={this.handleClick}/> 
        {people.map(person => (
          <React.Fragment>
            <input type="checkbox" name={person.location.city} id="city" value={person.location.city} onClick={this.handleCityClick}/>
            <label htmlFor="city">{person.location.city}</label>
          </React.Fragment>
        ))}
        <CardList people={people} genderFilter={this.genderFilter} />
      </div>
    );
  }
}

export default App;
