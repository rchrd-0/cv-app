import React, { useState } from 'react';
import uniqid from 'uniqid';

import { NewBasic, NewEmployment, NewEducation } from './Utils/defaultStates';
import Header from './Header';
import Form from './Form/Form';
import Preview from './Preview/Preview';
import validate from './Utils/InputValidation';
import StyledMain from './styledMain';

const Main = () => {
  const [basic, setBasic] = useState(NewBasic());
  const [fullWidth, setFullWidth] = useState(false);
  const [employment, setEmployment] = useState([NewEmployment(uniqid())]);
  const [employmentActive, setEmploymentActive] = useState(false);
  const [education, setEducation] = useState([NewEducation(uniqid())]);
  const [educationActive, setEducationActive] = useState(false);

  const hideForm = () => setFullWidth(!fullWidth);

  const toggleEmployment = () => {
    setEmploymentActive((prevState) => !prevState);
  };

  const toggleEducation = () => {
    setEducationActive((prevState) => !prevState);
  };

  const editBasic = (e) => {
    const { name, value } = e.target;
    const patternInvalid = validate(e.target);
    if (patternInvalid) return;

    setBasic({
      ...basic,
      [name]: value,
    });
  };

  const editEmployment = (e, id) => {
    const { name, value } = e.target;
    const patternInvalid = validate(e.target);
    if (patternInvalid) return;

    setEmployment((prevState) => {
      const newItem = prevState.map((item) => {
        if (item.id === id) {
          return { ...item, [name]: value };
        }

        return item;
      });

      return [...newItem];
    });
  };

  const addEmployment = () => {
    setEmployment((prevState) => [...prevState, NewEmployment(uniqid())]);
  };

  const removeEmployment = (id) => {
    setEmployment((prevState) => prevState.filter((item) => item.id !== id));
  };

  const editEducation = (e, id) => {
    const { name, value } = e.target;
    const patternInvalid = validate(e.target);
    if (patternInvalid) return;

    setEducation((prevState) => {
      const newItem = prevState.map((item) => {
        if (item.id === id) {
          return { ...item, [name]: value };
        }

        return item;
      });

      return [...newItem];
    });
  };

  const addEducation = () => {
    setEducation((prevState) => [...prevState, NewEducation(uniqid())]);
  };

  const removeEducation = (id) => {
    setEducation((prevState) => prevState.filter((item) => item.id !== id));
  };

  return (
    <>
      <Header onClick={hideForm} mode={fullWidth} />
      <StyledMain>
        {fullWidth ? null : (
          <Form
            basic={basic}
            editBasic={editBasic}
            employment={employment}
            editEmployment={editEmployment}
            addEmployment={addEmployment}
            removeEmployment={removeEmployment}
            education={education}
            editEducation={editEducation}
            addEducation={addEducation}
            removeEducation={removeEducation}
            toggleEducation={toggleEducation}
            toggleEmployment={toggleEmployment}
            employmentActive={employmentActive}
            educationActive={educationActive}
          />
        )}
        <Preview
          basic={basic}
          employment={employment}
          employmentActive={employmentActive}
          education={education}
          educationActive={educationActive}
        />
      </StyledMain>
    </>
  );
};

export default Main;
