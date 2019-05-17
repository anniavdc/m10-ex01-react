import React from "react";

class CardList extends React.Component {
  render() {
    const { people } = this.props;
    return (
      <ul className="card__list">
        {people.map(person => (
          <li key={person.login.uuid}>
            <img src={person.picture.medium} alt="person" />
            <h1>{`${person.name.first} ${person.name.last}`}</h1>
          </li>
        ))}
      </ul>
    );
  }
}

export default CardList;
