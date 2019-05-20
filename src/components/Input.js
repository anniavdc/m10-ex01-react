import React from "react";

class Input extends React.Component {
  render() {
    return (
      <React.Fragment>
        <input
          type={this.props.type}
          name={this.props.name}
          id={this.props.id}
          value={this.props.value}
          onClick={this.props.handleClick}
        />
        <label htmlFor={this.props.id}>{this.props.value}</label>
      </React.Fragment>
    );
  }
}

export default Input;
