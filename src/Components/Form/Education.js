import React from 'react';
import EducationItems from './EducationItems';

const Education = (props) => {
  const { items, editItem, addItem, removeItem } = props;
  return (
    <section className="form-section" data-component="education">
      <h2>Education</h2>
      {items.map((item) => (
        <EducationItems
          key={item.id}
          fields={item}
          onChange={editItem}
          remove={removeItem}
        />
      ))}
      <button type="button" onClick={addItem} className="add-item span-2">
        Add
      </button>
    </section>
  );
};

export default Education;
