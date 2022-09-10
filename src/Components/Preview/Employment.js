import React from 'react';
import EmploymentItems from './EmploymentItems';

const Employment = ({ data }) => {
  // const isSectionEmpty = (obj) => {
  //   const values = Object.values(obj);
  //   // return values.some((v) => v === '');
  // };

  return (
    <section className="preview-section" data-component="employment">
      {/* {isSectionEmpty(data) === true ? null : ( */}
      {/* <> */}
      <h1 className="a-head section-head">Employment</h1>
      {data.map((item) => (
        <EmploymentItems key={item.id} data={item} />
      ))}
      {/* </> */}
      {/* )} */}
    </section>
  );
};

export default Employment;
