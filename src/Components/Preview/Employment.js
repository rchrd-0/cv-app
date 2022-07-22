import React, { Component } from 'react';
import EmploymentItems from './EmploymentItems';

class Employment extends Component {
  render() {
    const { data } = this.props;
    return (
      <section className="preview-section" data-component="employment">
        {data.map((item) => (
          <EmploymentItems key={item.id} data={item} />
        ))}
      </section>
    );
  }
}

export default Employment;
