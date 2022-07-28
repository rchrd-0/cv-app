import React from 'react';

const EducationItems = (props) => {
  const { fields, onChange, remove } = props;
  const { id, name, programme, yearStart, yearEnd } = fields;
  return (
    <>
      <label htmlFor={`${id}-name`}>
        University/School
        <input
          type="text"
          name="name"
          id={`${id}-name`}
          value={name}
          onChange={(e) => onChange(e, id)}
        />
      </label>
      <label htmlFor={`${id}-prgrm`}>
        Programme/Qualification
        <input
          type="text"
          name="programme"
          id={`${id}-prgrm`}
          value={programme}
          onChange={(e) => onChange(e, id)}
        />
      </label>
      <label htmlFor={`${id}-yr-frm`}>
        From
        <input
          type="text"
          name="yearStart"
          id={`${id}-yr-frm`}
          maxLength={4}
          pattern="[0-9]+"
          placeholder={`Year e.g. ${new Date().getFullYear()}`}
          value={yearStart}
          onChange={(e) => onChange(e, id)}
        />
      </label>
      <label htmlFor={`${id}-yr-to`}>
        To
        <input
          type="text"
          name="yearEnd"
          id={`${id}-yr-to`}
          pattern="[0-9A-Za-z]+"
          placeholder="Year or Present"
          value={yearEnd}
          onChange={(e) => onChange(e, id)}
        />
      </label>
      <button
        type="button"
        onClick={() => remove(id)}
        className="remove-item span-2"
      >
        Remove
      </button>
    </>
  );
};

export default EducationItems;
