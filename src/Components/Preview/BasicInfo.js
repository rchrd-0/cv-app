import React from 'react';

const BasicInfo = ({ data }) => {
  const { firstName, lastName, phone, email, title, location, desc } = data;
  return (
    <section className="preview-section" data-component="basic">
      <h1 className="a-head" id="personal-name">
        {firstName} {lastName}
      </h1>
      <p className="b-head">{title}</p>
      <p>{desc}</p>
      <div id="contact">
        <div id="personal-loc">{location}</div>
        <div id="personal-phone">{`${phone.slice(0, 4)} ${phone.slice(
          4
        )}`}</div>
        <div id="personal-email">{email}</div>
      </div>
    </section>
  );
};

export default BasicInfo;
