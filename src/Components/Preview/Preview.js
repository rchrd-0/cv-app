import React from 'react';

import BasicInfo from './BasicInfo';
import Employment from './Employment';
import Education from './Education';

const Preview = (props) => {
  const { basic, employment, education, employmentActive, educationActive } =
    props;
  return (
    <div id="preview">
      <BasicInfo data={basic} />
      {employmentActive ? <Employment data={employment} /> : null}
      {educationActive ? <Education data={education} /> : null}
    </div>
  );
};

export default Preview;
