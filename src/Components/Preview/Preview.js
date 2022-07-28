import React from 'react';

import BasicInfo from './BasicInfo';
import Employment from './Employment';
import Education from './Education';

const Preview = (props) => {
  const { basic, employment, education } = props;
  return (
    <div id="preview">
      <BasicInfo data={basic} />
      <Employment data={employment} />
      <Education data={education} />
    </div>
  );
};

export default Preview;
