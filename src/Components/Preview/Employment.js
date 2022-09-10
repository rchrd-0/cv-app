import React from 'react';
import EmploymentItems from './EmploymentItems';

const Employment = ({ data }) => {
  return (
    <section data-component="employment">
      <h1 className="a-head section-head">Employment</h1>
      {data.map((item) => (
        <EmploymentItems key={item.id} data={item} />
      ))}
    </section>
  );
};

export default Employment;
