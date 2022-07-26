import React, { Component } from 'react';

class EducationItems extends Component {
  render() {
    const { data } = this.props;
    const { name, programme, yearStart, yearEnd } = data;
    return (
      <div className="education-preview">
        <div>
          {name}
          {programme}
          {yearStart}
          {yearEnd}
        </div>
      </div>
    );
  }
}

export default EducationItems;
