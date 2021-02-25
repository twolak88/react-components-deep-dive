import React, { Component } from 'react';
import classes from './App.module.css';

import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {

  constructor(props) {
    super(props);
    console.log('[App] constructor');
    // this.state = {
    //   persons: [
    //     { id: 'id1', name: 'Max', age: 28 },
    //     { id: 'id2', name: 'Mat', age: 23 },
    //     { id: 'id3', name: 'Tom', age: 31 },
    //   ],
    //   showPersons: false
    // };
  }

  //modern way
  state = {
    persons: [
      { id: 'id1', name: 'Max', age: 28 },
      { id: 'id2', name: 'Mat', age: 23 },
      { id: 'id3', name: 'Tom', age: 31 },
    ],
    showPersons: false
  };

  static getDerivedStateFromProps(props, state) {
    console.log('[App] getDerivedStateFromProps', props);
    return state;
  }

  componentDidMount() {
    console.log('[App] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App] shouldComponentUpdate', nextProps);
    return true;
  }

  componentDidUpdate() {
    console.log('[App] componentDidUpdate');
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => p.id === id);
    const person = {
      ...this.state.persons[personIndex],
      name: event.target.value
    };

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({
      persons: persons
    });
  };

  deletePersonHandler = (index) => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({
      persons: persons
    });
  };

  togglePersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons,
    });
  };

  render() {
    console.log('[App] render');
    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons 
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangedHandler}/>;
    }

    return (
      <div className={classes.App}>
        <Cockpit 
          title={this.props.appTitle}
          personsLength={this.state.persons.length}
          showPersons={this.state.showPersons}
          clicked={this.togglePersonsHandler}/>
        {persons}
      </div>
    );
  }
}

export default App;
