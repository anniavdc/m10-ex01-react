import React from "react";

class CardList extends React.Component {
  render() {
    const { genderFilter } = this.props;
    return (
      <ul className="card__list">
        {genderFilter().map(person => (
          <li key={person.login.uuid}>
            <img src={person.picture.medium} alt="person" />
            <h1>{`${person.name.first} ${person.name.last}`}</h1>
            <p>{person.gender}</p>
            <p>{person.location.city}</p>
          </li>
        ))}
      </ul>
    );
  }
}

export default CardList;
