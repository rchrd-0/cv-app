import React, { Component } from 'react';

class EmploymentItems extends Component {
  render() {
    const { fields } = this.props;
    return (
      <>
        <label htmlFor="input-company">
          Company name
          <input
            type="text"
            name="company-name"
            id="input-company"
            value={fields.name}
          />
        </label>
        <label htmlFor="input-company-loc">
          City
          <input
            type="text"
            name="company-loc"
            id="input-company-loc"
            value={fields.location}
          />
        </label>
        <label htmlFor="input-position">
          Position
          <input
            type="text"
            name="position"
            id="input-position"
            value={fields.position}
          />
        </label>
        <label htmlFor="input-emp-year-from">
          From
          <input
            type="number"
            name="emp-year-from"
            id="input-emp-year-from"
            maxLength={4}
            pattern="[0-9]{4}"
            placeholder={new Date().getFullYear()}
            value={fields.yearStart}
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
            value={fields.yearEnd}
          />
        </label>
        <label htmlFor="input-emp-desc">
          Description
          <textarea
            name="description"
            id="input-emp-desc"
            value={fields.desc}
          />
        </label>
        <button type="button">Delete employment</button>
      </>
    );
  }
}

export default EmploymentItems;
