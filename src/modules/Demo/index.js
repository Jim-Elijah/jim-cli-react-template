import React, { Component } from "react";
import { NavLink } from "react-router-dom";
export default class Demo extends Component {
  render() {
    const { match } = this.props;
    return (
      <div>
        <h3>Demo</h3>
        <NavLink to={`${match.url}/animationDemo`}>animationDemo</NavLink>
        <NavLink to={`${match.url}/other`}>other</NavLink>
      </div>
    );
  }
}
