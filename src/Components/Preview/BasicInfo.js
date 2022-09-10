import React from 'react';

const BasicInfo = ({ data }) => {
  const { firstName, lastName, phone, email, title, location, desc } = data;
  return (
    <section data-component="basic">
      <h1 className="a-head" id="personal-name">
        {firstName} {lastName}
      </h1>
      <p className="b-head">{title}</p>
      <p>{desc}</p>
      <div id="contact">
        {location ? <div id="personal-loc">{location}</div> : null}
        {phone ? (
          <div id="personal-phone">{`${phone.slice(0, 4)} ${phone.slice(
            4
          )}`}</div>
        ) : null}
        {email ? <div id="personal-email">{email}</div> : null}
      </div>
    </section>
  );
};

export default BasicInfo;
