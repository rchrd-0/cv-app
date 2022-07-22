import React, { Component } from 'react';
import EducationItems from './EducationItems';

class Education extends Component {
  render() {
    const { data } = this.props;
    return (
      <section className="preview-section" data-component="education">
        {data.map((item) => (
          <EducationItems key={item.id} data={item} />
        ))}
      </section>
    );
  }
}

export default Education;
