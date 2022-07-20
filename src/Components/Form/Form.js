import React, { Component } from 'react';
import BasicInfo from './BasicInfo';
import Education from './Education';
import Employment from './Employment';

class Form extends Component {
  render() {
    return (
      <div className="input-form">
        <BasicInfo />
        <Employment />
        <Education />
      </div>
    );
  }
}

export default Form;