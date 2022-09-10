import React from 'react';
import BasicInfo from './BasicInfo';
import Employment from './Employment';
import Education from './Education';

import InputForm from './styledForm';

const Form = (props) => {
  const {
    basic,
    editBasic,
    employment,
    editEmployment,
    addEmployment,
    removeEmployment,
    education,
    editEducation,
    addEducation,
    removeEducation,
    toggleEducation,
    toggleEmployment,
    employmentActive,
    educationActive,
  } = props;
  return (
    <InputForm>
      <BasicInfo items={basic} editItem={editBasic} />
      <Employment
        items={employment}
        editItem={editEmployment}
        addItem={addEmployment}
        removeItem={removeEmployment}
        toggleEmployment={toggleEmployment}
        employmentActive={employmentActive}
      />
      <Education
        items={education}
        editItem={editEducation}
        addItem={addEducation}
        removeItem={removeEducation}
        toggleEducation={toggleEducation}
        educationActive={educationActive}
      />
    </InputForm>
  );
};

export default Form;
