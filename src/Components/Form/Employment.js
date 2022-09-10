import React from 'react';
import EmploymentItems from './EmploymentItems';

const Employment = (props) => {
  const {
    items,
    editItem,
    addItem,
    removeItem,
    employmentActive,
    toggleEmployment,
  } = props;
  return (
    <section data-component="employment">
      <div className="form-head">
        <h2>Employment</h2>
        <button type="button" onClick={toggleEmployment}>
          {employmentActive ? 'Exclude section' : 'Include section'}
        </button>
      </div>
      {employmentActive ? (
        <>
          {items.map((item) => (
            <EmploymentItems
              key={item.id}
              fields={item}
              onChange={editItem}
              remove={removeItem}
            />
          ))}
          <button type="button" onClick={addItem} className="add-item">
            Add
          </button>
        </>
      ) : null}
    </section>
  );
};

export default Employment;
