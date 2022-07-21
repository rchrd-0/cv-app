import React, { Component } from 'react';
import uniqid from 'uniqid';

import Form from './Form/Form';

class Main extends Component {
  constructor() {
    super();

    this.state = {
      form: {
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
      },
    };

    this.addEmployment = this.addEmployment.bind(this);
  }

  addEmployment() {
    const { form } = this.state;
    const { employment } = form;
    this.setState({
      form: {
        employment: employment.concat([
          {
            id: uniqid(),
            name: '',
            location: '',
            position: '',
            yearStart: '',
            yearEnd: '',
            desc: '',
          },
        ]),
      },
    });
  }

  render() {
    const { form } = this.state;
    return (
      <main>
        <Form sections={form} employmentEvent={this.addEmployment} />
        <section className="preview" />
      </main>
    );
  }
}

export default Main;
