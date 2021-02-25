import React, { Component } from 'react';
import classes from './Person.module.css';
import Aux from '../../../hoc/Aux'; //built-in React.Fragment can be used instead
import withClass from '../../../hoc/withClass';
import PropTypes from "prop-types";

class Person extends Component {

  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }

  componentDidMount() {
    // this.inputElement.focus();
    this.inputElementRef.current.focus();
  }

  render() {
    console.log('[Person] rendering...');
    return (
      <Aux>
        <p key="i1" onClick={this.props.clicked}>
          He is {this.props.name} and he is {this.props.age}!
        </p>
        <p key="i2">{this.props.children}</p>
        <input 
          key="i3" 
          // ref={(inputEl) => {this.inputElement = inputEl;}}
          ref={this.inputElementRef}
          type="text" 
          onChange={this.props.changed} 
          value={this.props.name} />
      </Aux>
    );
  }
}

Person.propTypes = {
  clicked: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default withClass(Person, classes.Person);
