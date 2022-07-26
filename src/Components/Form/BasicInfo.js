import React, { Component } from 'react';

class BasicInfo extends Component {
  render() {
    const { items, editItem } = this.props;
    const { id, firstName, lastName, phone, email, title, location, desc } =
      items;
    return (
      <section className="form-section" data-component="basic">
        <h2>Basic</h2>
        <label htmlFor={`${id}-first-name`}>
          First name
          <input
            type="text"
            name="firstName"
            id={`${id}-first-name`}
            value={firstName}
            onChange={(e) => editItem(e, id)}
          />
        </label>
        <label htmlFor={`${id}-last-name`}>
          Last name
          <input
            type="text"
            name="lastName"
            id={`${id}-last-name`}
            value={lastName}
            onChange={(e) => editItem(e, id)}
          />
        </label>
        <label htmlFor={`${id}-title`}>
          Title
          <input
            type="text"
            name="title"
            id={`${id}-title`}
            value={title}
            onChange={(e) => editItem(e, id)}
          />
        </label>
        <label htmlFor={`${id}-location`}>
          Location
          <input
            type="text"
            name="location"
            id={`${id}-location`}
            value={location}
            placeholder="e.g. City, Country"
            onChange={(e) => editItem(e, id)}
          />
        </label>
        <label htmlFor={`${id}-desc`} className="span-2">
          Headline
          <input
            type="text"
            name="desc"
            id={`${id}-desc`}
            value={desc}
            onChange={(e) => editItem(e, id)}
          />
        </label>
        <h2 id="contact-header">Contact</h2>
        <label htmlFor={`${id}-phone`}>
          Phone number
          <input
            type="phone"
            name="phone"
            id={`${id}-phone`}
            maxLength={8}
            pattern="[0-9]+"
            placeholder="12345678"
            value={phone}
            onChange={(e) => editItem(e, id)}
          />
        </label>
        <label htmlFor={`${id}-email`}>
          Email
          <input
            type="email"
            name="email"
            id={`${id}-email`}
            value={email}
            onChange={(e) => editItem(e, id)}
          />
        </label>
      </section>
    );
  }
}

export default BasicInfo;
