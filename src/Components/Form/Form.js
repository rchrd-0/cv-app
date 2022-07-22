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
    } = this.props;
    return (
      <section className="input-form">
        <BasicInfo items={basicInfoData} editItem={editBasic} />
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
      </section>
    );
  }
}

export default Form;
