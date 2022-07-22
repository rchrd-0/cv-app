import React, { Component } from 'react';
import EducationItems from './EducationItems';

class Education extends Component {
  render() {
    const { items, editItem, addItem } = this.props;
    return (
      <section className="form-section" id="input-education">
        <h3>Education</h3>
        {items.map((item) => (
          <EducationItems key={item.id} fields={item} onChange={editItem} />
        ))}
        <button type="button" onClick={addItem}>
          Add education
        </button>
      </section>
    );
  }
}

export default Education;
