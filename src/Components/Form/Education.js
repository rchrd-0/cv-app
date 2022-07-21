import React, { Component } from 'react';
import EducationItems from './EducationItems';

class Education extends Component {
  render() {
    const { items, addOnClick } = this.props;
    return (
      <section className="form-section" id="input-education">
        <h3>Education</h3>
        {items.map((item) => (
          <EducationItems key={item.id} fields={item} />
        ))}
        <button type="button" onClick={addOnClick}>
          Add education
        </button>
      </section>
    );
  }
}

export default Education;
