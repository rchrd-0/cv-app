import React, { Component } from 'react';
import uniqid from 'uniqid';

import Header from './Header';
import Form from './Form/Form';
import Preview from './Preview/Preview';
import * as validate from './Utils/InputValidation';

class Main extends Component {
  constructor() {
    super();

    this.state = {
      basic: {
        id: uniqid(),
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        title: '',
        location: '',
        desc: '',
      },
      employment: [
        {
          id: uniqid(),
          name: '',
          position: '',
          yearStart: '',
          yearEnd: '',
          desc: '',
        },
      ],
      education: [
        {
          id: uniqid(),
          name: '',
          programme: '',
          yearStart: '',
          yearEnd: '',
        },
      ],
      fullWidth: false,
    };

    this.editBasic = this.editBasic.bind(this);
    this.editEmployment = this.editEmployment.bind(this);
    this.editEducation = this.editEducation.bind(this);
    this.addEmployment = this.addEmployment.bind(this);
    this.addEducation = this.addEducation.bind(this);
    this.removeEmployment = this.removeEmployment.bind(this);
    this.removeEducation = this.removeEducation.bind(this);
    this.hideForm = this.hideForm.bind(this);
  }

  editBasic(e) {
    const { name, value } = e.target;
    const patternInvalid = validate.checkPattern(e.target);
    if (patternInvalid) return;

    this.setState((prevState) => ({
      basic: {
        ...prevState.basic,
        [name]: value,
      },
    }));
  }

  editEmployment(e, id) {
    const { name, value } = e.target;
    const patternInvalid = validate.checkPattern(e.target);
    if (patternInvalid) return;

    this.setState((prevState) => {
      const newItem = prevState.employment.map((item) => {
        if (item.id === id) {
          return { ...item, [name]: value };
        }

        return item;
      });

      return {
        ...prevState,
        employment: [...newItem],
      };
    });
  }

  editEducation(e, id) {
    const { name, value } = e.target;
    const patternInvalid = validate.checkPattern(e.target);
    if (patternInvalid) return;

    this.setState((prevState) => {
      const newItem = prevState.education.map((item) => {
        if (item.id === id) {
          return { ...item, [name]: value };
        }

        return item;
      });

      return {
        ...prevState,
        education: [...newItem],
      };
    });
  }

  addEmployment() {
    this.setState((prevState) => ({
      employment: [
        ...prevState.employment,
        {
          id: uniqid(),
          name: '',
          location: '',
          programme: '',
          yearStart: '',
          yearEnd: '',
          desc: '',
        },
      ],
    }));
  }

  addEducation() {
    this.setState((prevState) => ({
      education: [
        ...prevState.education,
        {
          id: uniqid(),
          name: '',
          location: '',
          programme: '',
          yearStart: '',
          yearEnd: '',
        },
      ],
    }));
  }

  removeEmployment(id) {
    this.setState((prevState) => ({
      employment: prevState.employment.filter((item) => item.id !== id),
    }));
  }

  removeEducation(id) {
    this.setState((prevState) => ({
      education: prevState.education.filter((item) => item.id !== id),
    }));
  }

  hideForm() {
    this.setState((prevState) => ({
      fullWidth: !prevState.fullWidth,
    }));
  }

  render() {
    const { basic, employment, education, fullWidth } = this.state;
    return (
      <>
        <Header onClick={this.hideForm} mode={fullWidth} />
        <main>
          {fullWidth ? null : (
            <Form
              basicInfoData={basic}
              employmentData={employment}
              educationData={education}
              editBasic={this.editBasic}
              editEmployment={this.editEmployment}
              editEducation={this.editEducation}
              addEmployment={this.addEmployment}
              addEducation={this.addEducation}
              removeEmployment={this.removeEmployment}
              removeEducation={this.removeEducation}
            />
          )}
          <Preview data={this.state} />
        </main>
      </>
    );
  }
}

export default Main;
