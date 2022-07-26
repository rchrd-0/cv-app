import React, { Component } from 'react';

class EmploymentItems extends Component {
  render() {
    const { data } = this.props;
    const { name, position, yearStart, yearEnd, desc } = data;
    const descArr = desc.split('\n');
    return (
      <>
        <div className="name-year">
          <p className="b-head">{name}</p>
          <p className="b-head">{`${yearStart} — ${yearEnd}`}</p>
        </div>
        <div className="c-head">{position}</div>
        {descArr.map((item, index) => (
          <div key={index}>&#x2022; {item}</div>
        ))}
      </>
    );
  }
}

export default EmploymentItems;
