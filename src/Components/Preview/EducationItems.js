import React from 'react';

const EducationItems = ({ data }) => {
  const { name, programme, yearStart, yearEnd } = data;
  return (
    <>
      <div className="name-year">
        <p className="b-head">{name}</p>
        <p className="b-head">{`${yearStart} — ${yearEnd}`}</p>
      </div>
      <div className="c-head">{programme}</div>
    </>
  );
};

export default EducationItems;
