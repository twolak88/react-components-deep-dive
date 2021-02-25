import { PureComponent } from 'react';
import Person from './Person/Person';
import PropTypes from "prop-types";

class Persons extends PureComponent {

  // no state => no use it
  // static getDerivedStateFromProps(props, state) {
  //   console.log('[Persons] getDerivedStateFromProps', props);
  //   return state;
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[Persons] shouldComponentUpdate', nextProps);
  //   return nextProps.persons !== this.props.persons
  //     || nextProps.clicked !== this.props.clicked
  //     || nextProps.changed !== this.props.changed;
  // }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Persons] getSnapshotBeforeUpdate', prevProps);
    return {message: 'Snapshot!'};
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[Persons] componentDidUpdate');
    console.log(snapshot)
  }

  componentWillUnmount() {
    console.log('[Persons] componentWillUnmount');
  }

  render() {
    console.log('[Persons] rendering...');
    return this.props.persons.map((person, idx) => <Person
          name={person.name}
          age={person.age}
          clicked={() => this.props.clicked(idx)}
          key={person.id}
          changed={(event) => this.props.changed(event, person.id)}
        />
    );
  }
}

Persons.propTypes = {
  persons: PropTypes.arrayOf(
    PropTypes.exact(
      {
        name: PropTypes.string,
        age: PropTypes.number,
        id: PropTypes.string
      }
    )
  ),
  clicked: PropTypes.func,
  changed: PropTypes.func
};

export default Persons;
