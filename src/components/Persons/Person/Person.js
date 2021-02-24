import { Component } from 'react';
import classes from './Person.module.css';

class Person extends Component {
  render() {
    console.log('[Person] rendering...');
    return (
      <div className={classes.Person}>
        <p onClick={this.props.clicked}>
          He is {this.props.name} and he is {this.props.age}!
        </p>
        <p>{this.props.children}</p>
        <input type="text" onChange={this.props.changed} value={this.props.name} />
      </div>
    );
  }
}

export default Person;
