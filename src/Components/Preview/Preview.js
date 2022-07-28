import React, { Component } from 'react';

import BasicInfo from './BasicInfo';
import Employment from './Employment';
import Education from './Education';

class Preview extends Component {
  render() {
    const { basic, employment, education } = this.props;
    return (
      <div id="preview">
        <BasicInfo data={basic} />
        <Employment data={employment} />
        <Education data={education} />
      </div>
    );
  }
}

export default Preview;
