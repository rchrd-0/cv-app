import uniqid from 'uniqid';
import React from 'react';

const EmploymentItems = ({ data }) => {
  const { name, position, yearStart, yearEnd, desc } = data;
  const descArr = desc.split('\n');
  return (
    <>
      <div className="name-year">
        <p className="b-head">{name}</p>
        {yearStart !== '' || yearEnd !== '' ? (
          <p className="b-head">{`${yearStart} — ${yearEnd}`}</p>
        ) : null}
      </div>
      <div className="c-head">{position}</div>
      {descArr.length > 1 || descArr[0] !== '' ? (
        <>
          {descArr.map((item, index = uniqid()) => (
            <div key={index}>&#x2022; {item}</div>
          ))}
        </>
      ) : null}
    </>
  );
};

export default EmploymentItems;
