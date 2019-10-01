import React from 'react';
import { render } from "react-dom";
import { TextInput, Button, SelectInput, Card, CoverHero } from "./lib";
import './app.css'
import './lib/assets/styles.scss'
const test = () => {
  console.log('test')
}
const App = () => (
  <div className="app">
    <section>
      <CoverHero heroArray={[{
        img: 'https://www.logistec.com/wp-content/uploads/2017/12/placeholder.png',
        title: 'this is a title1',
        subTitle: 'this is a sub title1',
        buttonClass: 'button-large-primary',
        buttonText: 'this is some button text1',
      },
        {
          img: 'data:image/png;base64,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',
          title: 'this is a title 2',
          subTitle: 'this is a sub title 2',
          buttonClass: 'button-large-secondary',
          buttonText: 'this is some button text 2',
        },
        {
          img: 'https://www.hyduke.com/wp-content/uploads/2017/10/placeholder-red.png',
          title: 'this is a title 3',
          subTitle: 'this is a sub title 3',
          buttonClass: 'button-large-tertiary',
          buttonText: 'this is some button text 3',
        }
      ]}/>
    </section>
    <div className="content">
    <h1>Hello React</h1>

    <section className="card-section">
      <Card  text="this is some content" title="This is a title" buttonClass="button-large-primary" buttonText="Submit" img="https://www.hyduke.com/wp-content/uploads/2017/10/placeholder-red.png"/>
      <Card  text="this is some content" title="This is a title" buttonClass="button-large-secondary" buttonText="Submit" img="https://www.hyduke.com/wp-content/uploads/2017/10/placeholder-red.png"/>
      <Card  text="this is some content" title="This is a title" buttonClass="button-large-tertiary" buttonText="Submit" img="https://www.hyduke.com/wp-content/uploads/2017/10/placeholder-red.png"/>
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
