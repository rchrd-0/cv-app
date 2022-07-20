import React, { Component } from 'react';

class BasicInfo extends Component {
  render() {
    return (
      <section className="form-section" id="input-basic">
        <h3>Basic Information</h3>
        <label htmlFor="input-first-name">
          First name
          <input type="text" name="first-name" id="input-first-name" />
        </label>
        <label htmlFor="input-last-name">
          Last name
          <input type="text" name="last-name" id="input-last-name" />
        </label>
        <label htmlFor="input-phone">
          Phone number
          <input type="number" name="phone" id="input-phone" />
        </label>
        <label htmlFor="input-email">
          Email
          <input type="email" name="email" id="input-email" />
        </label>
        <label htmlFor="input-title">
          Title
          <input type="text" name="title" id="input-title" />
        </label>
        <label htmlFor="input-location">
          City
          <input type="text" name="location" id="input-location" />
        </label>
        <label htmlFor="input-desc">
          Description
          <textarea name="description" id="input-desc" />
        </label>
      </section>
    );
  }
}

export default BasicInfo;
