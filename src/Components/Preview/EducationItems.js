import React from 'react';

const EducationItems = ({ data }) => {
  const { name, programme, yearStart, yearEnd } = data;
  return (
    <>
      <div className="name-year">
        <p className="b-head">{name}</p>
        {yearStart !== '' || yearEnd !== '' ? (
          <p className="b-head">{`${yearStart} — ${yearEnd}`}</p>
        ) : null}
      </div>
      <div className="c-head">{programme}</div>
    </>
  );
};

export default EducationItems;
