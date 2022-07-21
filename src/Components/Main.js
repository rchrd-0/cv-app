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

    this.addEmployment = this.addEmployment.bind(this);
    this.addEducation = this.addEducation.bind(this);
  }

  addEmployment() {
    const { employment } = this.state;

    this.setState({
      employment: employment.concat([
        {
          id: uniqid(),
          name: '',
          location: '',
          programme: '',
          yearStart: '',
          yearEnd: '',
        },
      ]),
    });
  }

  addEducation() {
    const { education } = this.state;

    this.setState({
      education: education.concat([
        {
          id: uniqid(),
          name: '',
          location: '',
          programme: '',
          yearStart: '',
          yearEnd: '',
        },
      ]),
    });
  }

  render() {
    const { employment, education } = this.state;
    return (
      <main>
        <Form
          employmentData={employment}
          educationData={education}
          addEmployment={this.addEmployment}
          addEducation={this.addEducation}
        />
        <section className="preview" />
      </main>
    );
  }
}

export default Main;
