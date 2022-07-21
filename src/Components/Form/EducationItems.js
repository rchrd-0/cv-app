import React, { Component } from 'react';

class EducationItems extends Component {
  render() {
    const { fields } = this.props;
    return (
      <>
        <label htmlFor="input-school">
          University/School name
          <input
            type="text"
            name="school-name"
            id="input-school"
            value={fields.name}
          />
        </label>
        <label htmlFor="input-school-loc">
          City
          <input
            type="text"
            name="school-loc"
            id="input-school-loc"
            value={fields.location}
          />
        </label>
        <label htmlFor="input-programme">
          Programme/Qualification
          <input
            type="text"
            name="programme"
            id="input-programme"
            value={fields.programme}
          />
        </label>
        <label htmlFor="input-year-from">
          From
          <input
            type="number"
            name="edu-year-from"
            id="input-edu-year-from"
            maxLength={4}
            pattern="[0-9]{4}"
            placeholder={new Date().getFullYear()}
            value={fields.yearStart}
          />
        </label>
        <label htmlFor="input-edu-year-til">
          To
          <input
            type="number"
            name="edu-year-to"
            id="input-edu-year-to"
            maxLength={4}
            pattern="[0-9]{4}"
            placeholder="Year or Present"
            value={fields.yearEnd}
          />
        </label>
        <button type="button">Remove</button>
      </>
    );
  }
}

export default EducationItems;
