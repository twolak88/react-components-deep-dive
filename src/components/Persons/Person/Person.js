import { Component } from 'react';
// import classes from './Person.module.css';
import Aux from '../../../hoc/Aux';

class Person extends Component {
  render() {
    console.log('[Person] rendering...');
    return (
      <Aux>
        <p key="i1" onClick={this.props.clicked}>
          He is {this.props.name} and he is {this.props.age}!
        </p>
        <p key="i2">{this.props.children}</p>
        <input key="i3" type="text" onChange={this.props.changed} value={this.props.name} />
      </Aux>
    );
  }
}

export default Person;
