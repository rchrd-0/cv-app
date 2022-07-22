import React, { Component } from 'react';
import EmploymentItems from './EmploymentItems';

class Employment extends Component {
  render() {
    const { items, addItem, editItem } = this.props;
    return (
      <section className="form-section" id="input-employment">
        <h3>Employment</h3>
        {items.map((item) => (
          <EmploymentItems key={item.id} fields={item} onChange={editItem} />
        ))}
        <button type="button" onClick={addItem}>
          Add employment
        </button>
      </section>
    );
  }
}

export default Employment;
