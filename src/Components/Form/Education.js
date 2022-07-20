import React, { Component } from 'react';

class Education extends Component {
  render() {
    return (
      <section className="form-section" id="input-education">
        <h3>Education</h3>
        <label htmlFor="input-school">
          University/School name
          <input type="text" name="school-name" id="input-school" />
        </label>
        <label htmlFor="input-school-loc">
          City
          <input type="text" name="school-loc" id="input-school-loc" />
        </label>
        <label htmlFor="input-programme">
          Programme/Qualification
          <input type="text" name="programme" id="input-programme" />
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
          />
        </label>
      </section>
    );
  }
}

export default Education;
