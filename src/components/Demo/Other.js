import React, { Component } from "react";

const Child = (props) => {
  const { msg } = props;
  return <div className="child-wrapper">child - {msg}</div>;
};

const Father = (props) => {
  const { msg, children } = props;
  return (
    <div className="fathers-wrapper">
      father - {msg}
      {children}
    </div>
  );
};
export default class Other extends Component {
  render() {
    return (
      <div className="other-wrapper">
        other
        <Father msg="111">
          <Child msg="222"></Child>
        </Father>
      </div>
    );
  }
}
