import React, { Component } from 'react';

class EmploymentItems extends Component {
  render() {
    const { data } = this.props;
    const { name, position, yearStart, yearEnd, desc } = data;
    return (
      <div className="employment-preview">
        <div>
          {name}
          {position}
          {yearStart}
          {yearEnd}
          {desc}
        </div>
      </div>
    );
  }
}

export default EmploymentItems;
