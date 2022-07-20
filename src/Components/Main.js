import React, { Component } from 'react';

import Form from './Form/Form';

class Main extends Component {
  render() {
    return (
      <main>
        <Form />
        <section className="preview" />
      </main>
    );
  }
}

export default Main;
