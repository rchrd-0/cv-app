import React, { Component } from 'react';

class BasicInfo extends Component {
  render() {
    const { data } = this.props;
    const { firstName, lastName, phone, email, title, location, desc } = data;
    return (
      <section className="preview-section" data-component="basic">
        <h1>
          {firstName} {lastName}
        </h1>
        <h2>
          {location} {title}
        </h2>
        <p>{desc}</p>
        <h3>
          {phone} {email}
        </h3>
      </section>
    );
  }
}

export default BasicInfo;
