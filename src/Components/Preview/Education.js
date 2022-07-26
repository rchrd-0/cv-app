import React, { Component } from 'react';
import EducationItems from './EducationItems';

class Education extends Component {
  render() {
    const { data } = this.props;
    return (
      <section className="preview-section" data-component="education">
        <h1 className="a-head section-head">Education</h1>
        {data.map((item) => (
          <EducationItems key={item.id} data={item} />
        ))}
      </section>
    );
  }
}

export default Education;
