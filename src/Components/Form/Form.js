import React, { Component } from 'react';
import BasicInfo from './BasicInfo';
import Education from './Education';
// import Education from './Education';
import Employment from './Employment';

class Form extends Component {
  render() {
    const { sections, employmentEvent } = this.props;
    const { employment } = sections;
    return (
      <div className="input-form">
        <BasicInfo />
        <Employment items={employment} clickAdd={employmentEvent} />
      </div>
    );
  }
}

export default Form;
