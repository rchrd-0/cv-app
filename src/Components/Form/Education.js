import React, { Component } from 'react';
import EducationItems from './EducationItems';

class Education extends Component {
  render() {
    const { items, editItem, addItem, removeItem } = this.props;
    return (
      <section className="form-section" data-component="education">
        <h3>Education</h3>
        {items.map((item) => (
          <EducationItems
            key={item.id}
            fields={item}
            onChange={editItem}
            remove={removeItem}
          />
        ))}
        <button type="button" onClick={addItem}>
          Add
        </button>
      </section>
    );
  }
}

export default Education;
