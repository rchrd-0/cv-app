import React, { Component } from 'react';
import BasicInfo from './BasicInfo';
import Employment from './Employment';
import Education from './Education';

class Form extends Component {
  render() {
    const {
      employmentData,
      educationData,
      editEmployment,
      editEducation,
      addEmployment,
      addEducation,
    } = this.props;
    return (
      <div className="input-form">
        <BasicInfo />
        <Employment
          items={employmentData}
          editItem={editEmployment}
          addItem={addEmployment}
        />
        <Education
          items={educationData}
          editItem={editEducation}
          addItem={addEducation}
        />
      </div>
    );
  }
}

export default Form;
