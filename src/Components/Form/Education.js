import React, { Component } from 'react';
import EducationItems from './EducationItems';

class Education extends Component {
  render() {
    const { items, editItem, addItem, removeItem } = this.props;
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
        <button type="button" onClick={addItem} className="add-item">
          Add
        </button>
      </section>
    );
  }
}

export default Education;
