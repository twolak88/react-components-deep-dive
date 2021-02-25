import { useEffect } from 'react';
import classes from './Cockpit.module.css';

const Cockpit = (props) => {

  useEffect(() => {
    console.log('[Cockpit] useEffect');
    //Http request
    setTimeout(() => {
      console.log('First time rendered!');
    }, 1000);
  }, []);

  useEffect(() => {
    console.log('[Cockpit] useEffect');
    //Http request
    setTimeout(() => {
      console.log('Persons changed!');
    }, 1000);
  }, [props.persons]);

  useEffect(() => {
    console.log('[Cockpit] useEffect');
    //Http request
    setTimeout(() => {
      console.log('Persons length changed!');
    }, 1000);
  }, [props.persons.length]);

  //useEffect();

  let parClasses = [];
  let buttonClass = '';

  if (props.persons.length <= 2) {
    parClasses.push(classes.red);
  }
  if (props.persons.length <= 1) {
    parClasses.push(classes.bold);
  }

  if (props.showPersons) {
    buttonClass = classes.Red;
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={parClasses.join(' ')}>
        {!props.persons.length
          ? 'No person'
          : props.persons.length +
            (props.persons.length > 1 ? ' people' : ' person')}{' '}
        on the list!
      </p>
      <button className={buttonClass} onClick={props.clicked}>
        Toggle Persons
      </button>
    </div>
  );
};

export default Cockpit;
