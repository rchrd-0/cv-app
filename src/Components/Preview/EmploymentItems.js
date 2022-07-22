import React, { Component } from 'react';

class EmploymentItems extends Component {
  render() {
    const { data } = this.props;
    const { name, location, position, yearStart, yearEnd, desc } = data;
    return (
      <div className="employment-preview">
        <div>
          {name}
          {location}
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
