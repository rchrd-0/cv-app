import React, { Component } from 'react';
import BasicInfo from './BasicInfo';
import Employment from './Employment';
import Education from './Education';

class Form extends Component {
  render() {
    const { employmentData, educationData, addEmployment, addEducation } =
      this.props;
    return (
      <div className="input-form">
        <BasicInfo />
        <Employment items={employmentData} addOnClick={addEmployment} />
        <Education items={educationData} addOnClick={addEducation} />
      </div>
    );
  }
}

export default Form;
