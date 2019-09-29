import React from 'react';
import { render } from "react-dom";
import { TextInput, Button, SelectInput, Card } from "./lib";
import './app.css'
import './lib/assets/styles.scss'
const test = () => {
  console.log('test')
}
const App = () => (
  <div className="app">
    <div className="content">
    <h1>Hello React</h1>
    <section>
      <Card  text="this is some content" title="This is a title"/>
    </section>
    <section>
      <TextInput label="Email Address" placeholder="name@example.com" />
      <SelectInput options={['test1', 'test2', 'test3']}/>
    </section>
    <section>
      <Button emitEvent={test} buttonClass="button-large-primary active">button-large-primary</Button>
      <Button emitEvent={test} buttonClass="button-medium-primary">button-medium-primary</Button>
      <Button emitEvent={test} buttonClass="button-small-primary">button-small-primary</Button>
      <Button emitEvent={test} buttonClass="button-mini-primary">button-mini-primary</Button>
    </section>
    <section>
      <Button buttonClass="button-large-secondary">button-medium-secondary</Button>
      <Button emitEvent={test} buttonClass="button-medium-secondary">button-medium-secondary</Button>
      <Button emitEvent={test} buttonClass="button-small-secondary">button-small-secondary</Button>
      <Button emitEvent={test} buttonClass="button-mini-secondary">button-mini-secondary</Button>
    </section>
   <section>
     <Button buttonClass="button-large-tertiary">button-large-tertiary</Button>
     <Button emitEvent={test} buttonClass="button-medium-tertiary">button-medium-tertiary</Button>
     <Button emitEvent={test} buttonClass="button-small-tertiary">button-small-tertiary</Button>
     <Button emitEvent={test} buttonClass="button-mini-tertiary">button-mini-tertiary</Button>
   </section>
    <section>
      <Button buttonClass="button-large-success">button-large-success</Button>
      <Button emitEvent={test} buttonClass="button-medium-success">button-medium-success</Button>
      <Button emitEvent={test} buttonClass="button-small-success">button-small-success</Button>
      <Button emitEvent={test} buttonClass="button-mini-success">button-mini-success</Button>
    </section>
    <section>
      <Button buttonClass="button-large-warning">button-large-success</Button>
      <Button emitEvent={test} buttonClass="button-medium-warning">button-medium-warning</Button>
      <Button emitEvent={test} buttonClass="button-small-warning">button-small-warning</Button>
      <Button emitEvent={test} buttonClass="button-mini-warning">button-mini-warning</Button>
    </section>
    <section>
      <Button buttonClass="button-large-danger">button-large-success</Button>
      <Button emitEvent={test} buttonClass="button-medium-danger">button-medium-danger</Button>
      <Button emitEvent={test} buttonClass="button-small-danger">button-small-danger</Button>
      <Button emitEvent={test} buttonClass="button-mini-danger">button-mini-danger</Button>
    </section>
    <div>

    </div>
  </div>
  </div>
    );

render(<App />, document.getElementById("root"));
