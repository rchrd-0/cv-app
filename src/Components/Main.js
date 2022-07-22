import React, { Component } from 'react';
import uniqid from 'uniqid';

import Form from './Form/Form';

class Main extends Component {
  constructor() {
    super();

    this.state = {
      employment: [
        {
          id: uniqid(),
          name: '',
          location: '',
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
          location: '',
          programme: '',
          yearStart: '',
          yearEnd: '',
        },
      ],
    };

    // this.editEmployment = this.editEmployment.bind(this);
    this.addEmployment = this.addEmployment.bind(this);
    this.addEducation = this.addEducation.bind(this);
  }

  // editEmployment(e, id) {
  //   const { name, value } = e.target;
  //   const { employment } = this.state;
  //   // const thisItem = employment.find(item => item.id === id);
  // }

  addEmployment() {
    this.setState((prevState) => ({
      ...prevState,
      employment: [
        ...prevState.employment,
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

  addEducation() {
    this.setState((prevState) => ({
      ...prevState,
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

  render() {
    const { employment, education } = this.state;
    return (
      <main>
        <Form
          employmentData={employment}
          educationData={education}
          editEmployment={this.editEmployment}
          addEmployment={this.addEmployment}
          addEducation={this.addEducation}
        />
        <section className="preview" />
      </main>
    );
  }
}

export default Main;
