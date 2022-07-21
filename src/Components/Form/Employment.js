import React, { Component } from 'react';
import EmploymentItems from './EmploymentItems';

class Employment extends Component {
  render() {
    const { items, clickAdd } = this.props;
    return (
      <section className="form-section" id="input-employment">
        <h3>Employment</h3>
        {items.map(item => (
          <EmploymentItems key={item.id} fields={item}/>
        ))}
        <button type="button" onClick={clickAdd}>
          Add employment
        </button>
      </section>
    );
  }
}

export default Employment;
