import React, { Component } from 'react';

class EducationItems extends Component {
  render() {
    const { data } = this.props;
    const { name, programme, yearStart, yearEnd } = data;
    return (
      <>
        <div className="name-year">
          <p className="b-head">{name}</p>
          <p className="b-head">{`${yearStart} — ${yearEnd}`}</p>
        </div>
        <div className="c-head">{programme}</div>
      </>
    );
  }
}

export default EducationItems;
