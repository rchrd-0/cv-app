import React from 'react';

import BasicInfo from './BasicInfo';
import Employment from './Employment';
import Education from './Education';
import StyledPreview from './styledPreview';

const Preview = (props) => {
  const { basic, employment, education, employmentActive, educationActive } =
    props;
  return (
    <StyledPreview>
      <div id="preview">
        <BasicInfo data={basic} />
        {employmentActive ? <Employment data={employment} /> : null}
        {educationActive ? <Education data={education} /> : null}
      </div>
    </StyledPreview>
  );
};

export default Preview;
