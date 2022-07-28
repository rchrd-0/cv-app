import React from 'react';
import EmploymentItems from './EmploymentItems';

const Employment = (props) => {
  const { items, editItem, addItem, removeItem } = props;
  return (
    <section className="form-section" data-component="employment">
      <h2>Employment</h2>
      {items.map((item) => (
        <EmploymentItems
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

export default Employment;
