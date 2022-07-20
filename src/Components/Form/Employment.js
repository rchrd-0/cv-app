import React, { Component } from 'react';

class Employment extends Component {
  render() {
    return (
      <section className="form-section" id="input-employment">
        <h3>Employment</h3>
        <label htmlFor="input-company">
          Company name
          <input type="text" name="company-name" id="input-company" />
        </label>
        <label htmlFor="input-company-loc">
          City
          <input type="text" name="company-loc" id="input-company-loc" />
        </label>
        <label htmlFor="input-position">
          Position
          <input type="text" name="position" id="input-position" />
        </label>
        <label htmlFor="input-emp-year-from">
          <input
            type="number"
            name="emp-year-from"
            id="input-emp-year-from"
            maxLength={4}
            pattern="[0-9]{4}"
            placeholder={new Date().getFullYear()}
          />
        </label>
        <label htmlFor="input-emp-year-til">
          To
          <input
            type="number"
            name="emp-year-to"
            id="input-emp-year-to"
            maxLength={4}
            pattern="[0-9]{4}"
            placeholder="Year or Present"
          />
        </label>
        <label htmlFor="input-emp-desc">
          Description
          <textarea name="description" id="input-emp-desc" />
        </label>
      </section>
    );
  }
}

export default Employment;
