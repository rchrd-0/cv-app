import React, { useState } from 'react';
import uniqid from 'uniqid';

import Header from './Header';
import Form from './Form/Form';
import Preview from './Preview/Preview';
import * as validate from './Utils/InputValidation';

const Main = () => {
  const [fullWidth, setFullWidth] = useState(false);

  const hideForm = () => setFullWidth(!fullWidth);

  const [basic, setBasic] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    title: '',
    location: '',
    desc: '',
  });

  const editBasic = (e) => {
    const { name, value } = e.target;
    const patternInvalid = validate.checkPattern(e.target);
    if (patternInvalid) return;

    setBasic({
      ...basic,
      [name]: value,
    });
  };

  const [employment, setEmployment] = useState([
    {
      id: uniqid(),
      name: '',
      position: '',
      yearStart: '',
      yearEnd: '',
      desc: '',
    },
  ]);

  const editEmployment = (e, id) => {
    const { name, value } = e.target;
    const patternInvalid = validate.checkPattern(e.target);
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
    setEmployment((prevState) => [
      ...prevState,
      {
        id: uniqid(),
        name: '',
        location: '',
        programme: '',
        yearStart: '',
        yearEnd: '',
        desc: '',
      },
    ]);
  };

  const removeEmployment = (id) => {
    setEmployment((prevState) => prevState.filter((item) => item.id !== id));
  };

  const [education, setEducation] = useState([
    {
      id: uniqid(),
      name: '',
      programme: '',
      yearStart: '',
      yearEnd: '',
    },
  ]);

  const editEducation = (e, id) => {
    const { name, value } = e.target;
    const patternInvalid = validate.checkPattern(e.target);
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
    setEducation((prevState) => [
      ...prevState,
      {
        id: uniqid(),
        name: '',
        programme: '',
        yearStart: '',
        yearEnd: '',
      },
    ]);
  };

  const removeEducation = (id) => {
    setEducation((prevState) => prevState.filter((item) => item.id !== id));
  };

  return (
    <>
      <Header onClick={hideForm} mode={fullWidth} />
      <main>
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
          />
        )}
        <Preview basic={basic} employment={employment} education={education} />
      </main>
    </>
  );
};

export default Main;
