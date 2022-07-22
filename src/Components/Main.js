import React, { Component } from 'react';
import uniqid from 'uniqid';

import Form from './Form/Form';

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

    this.editBasic = this.editBasic.bind(this);
    this.editEmployment = this.editEmployment.bind(this);
    this.editEducation = this.editEducation.bind(this);
    this.addEmployment = this.addEmployment.bind(this);
    this.addEducation = this.addEducation.bind(this);
    this.removeEmployment = this.removeEmployment.bind(this);
    this.removeEducation = this.removeEducation.bind(this);
  }

  editBasic(e) {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      basic: {
        ...prevState.basic,
        [name]: value,
      },
    }));
  }

  editEmployment(e, id) {
    const { name, value } = e.target;

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

  render() {
    const { basic, employment, education } = this.state;
    return (
      <main>
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
        <section className="preview" />
      </main>
    );
  }
}

export default Main;
