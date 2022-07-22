import React, { Component } from 'react';
import BasicInfo from './BasicInfo';
import Employment from './Employment';
import Education from './Education';

class Form extends Component {
  render() {
    const {
      basicInfoData,
      employmentData,
      educationData,
      editBasic,
      editEmployment,
      editEducation,
      addEmployment,
      addEducation,
      removeEmployment,
      removeEducation,
    } = this.props;
    return (
      <div id="input-form">
        <BasicInfo items={basicInfoData} editItem={editBasic} />
        <Employment
          items={employmentData}
          editItem={editEmployment}
          addItem={addEmployment}
          removeItem={removeEmployment}
        />
        <Education
          items={educationData}
          editItem={editEducation}
          addItem={addEducation}
          removeItem={removeEducation}
        />
      </div>
    );
  }
}

export default Form;
