import React, { Component } from 'react';
import EmploymentItems from './EmploymentItems';

class Employment extends Component {
  render() {
    const { items, addItem, editItem, removeItem } = this.props;
    return (
      <section className="form-section" data-component="employment">
        <h2>Employment</h2>
        {items.map((item) => (
          <EmploymentItems
            key={item.id}
            fields={item}
            onChange={editItem}
            remove={removeItem}
          />
        ))}
        <button type="button" onClick={addItem} className="add-item">
          Add
        </button>
      </section>
    );
  }
}

export default Employment;
