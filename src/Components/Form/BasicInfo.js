import React from 'react';

const BasicInfo = (props) => {
  const { items, editItem } = props;
  const { firstName, lastName, phone, email, title, location, desc } = items;
  return (
    <section data-component="basic">
      <h2>Basic</h2>
      <label htmlFor="first-name">
        First name
        <input
          type="text"
          name="firstName"
          id="first-name"
          value={firstName}
          onChange={(e) => editItem(e)}
        />
      </label>
      <label htmlFor="last-name">
        Last name
        <input
          type="text"
          name="lastName"
          id="last-name"
          value={lastName}
          onChange={(e) => editItem(e)}
        />
      </label>
      <label htmlFor="title">
        Title
        <input
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={(e) => editItem(e)}
        />
      </label>
      <label htmlFor="location">
        Location
        <input
          type="text"
          name="location"
          id="location"
          value={location}
          placeholder="e.g. City, Country"
          onChange={(e) => editItem(e)}
        />
      </label>
      <label htmlFor="desc" className="span-2">
        Headline
        <textarea
          name="desc"
          id="desc"
          value={desc}
          onChange={(e) => editItem(e)}
        />
      </label>
      <h2 id="contact-header">Contact</h2>
      <label htmlFor="phone">
        Phone number
        <input
          type="phone"
          name="phone"
          id="phone"
          maxLength={8}
          pattern="[0-9]+"
          placeholder="12345678"
          value={phone}
          onChange={(e) => editItem(e)}
        />
      </label>
      <label htmlFor="email">
        Email
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => editItem(e)}
        />
      </label>
    </section>
  );
};

export default BasicInfo;
