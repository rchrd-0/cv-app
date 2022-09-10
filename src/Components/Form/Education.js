import React from 'react';
import EducationItems from './EducationItems';

const Education = (props) => {
  const {
    items,
    editItem,
    addItem,
    removeItem,
    toggleEducation,
    educationActive,
  } = props;
  return (
    <section data-component="education">
      <div className="form-head">
        <h2>Education</h2>
        <button type="button" onClick={toggleEducation}>
          {educationActive ? 'Exclude section' : 'Include section'}
        </button>
      </div>
      {educationActive ? (
        <>
          {items.map((item) => (
            <EducationItems
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

export default Education;
