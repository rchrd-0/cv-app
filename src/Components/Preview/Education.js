import React from 'react';
import EducationItems from './EducationItems';

const Education = ({ data }) => {
  return (
    <section data-component="education">
      <h1 className="a-head section-head">Education</h1>
      {data.map((item) => (
        <EducationItems key={item.id} data={item} />
      ))}
    </section>
  );
};

export default Education;
