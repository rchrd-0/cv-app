import React from 'react';
import BasicInfo from './BasicInfo';
import Employment from './Employment';
import Education from './Education';

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
  } = props;
  return (
    <div id="input-form">
      <BasicInfo items={basic} editItem={editBasic} />
      <Employment
        items={employment}
        editItem={editEmployment}
        addItem={addEmployment}
        removeItem={removeEmployment}
      />
      <Education
        items={education}
        editItem={editEducation}
        addItem={addEducation}
        removeItem={removeEducation}
      />
    </div>
  );
};

export default Form;
