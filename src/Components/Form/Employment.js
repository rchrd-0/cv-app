import React, { Component } from 'react';
import EmploymentItems from './EmploymentItems';

class Employment extends Component {
  render() {
    const { items, addItem, editItem, removeItem } = this.props;
    return (
      <section className="form-section" data-component="employment">
        <h3>Employment</h3>
        {items.map((item) => (
          <EmploymentItems
            key={item.id}
            fields={item}
            onChange={editItem}
            remove={removeItem}
          />
        ))}
        <button type="button" onClick={addItem}>
          Add
        </button>
      </section>
    );
  }
}

export default Employment;
