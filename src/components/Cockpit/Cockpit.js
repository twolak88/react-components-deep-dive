import { useEffect } from 'react';
import classes from './Cockpit.module.css';

const Cockpit = (props) => {

  useEffect(() => {
    console.log('[Cockpit] useEffect1');
    //Http request
    setTimeout(() => {
      console.log('First time rendered!');
    }, 1000);
    return () => {
      console.log('[Cockpit] useEffect => cleanup work');
    }
  }, []);

  useEffect(() => {
    console.log('[Cockpit] useEffect2');
    setTimeout(() => {
      console.log('Persons changed!');
    }, 1000);
    return () => {
      console.log('[Cockpit] useEffect => 2 cleanup work');
    }
  }, [props.persons]);

  useEffect(() => {
    console.log('[Cockpit] useEffect3');
    setTimeout(() => {
      console.log('Persons length changed!');
    }, 1000);
    return () => {
      console.log('[Cockpit] useEffect => 3 cleanup work');
    }
  });

  useEffect(() => {
    console.log('[Cockpit] useEffect4');
    //Http request
    const timer = setTimeout(() => {
      console.log('Example with timer!');
    }, 3000);
    return () => {
      clearTimeout(timer);
      console.log('[Cockpit] useEffect => 4 cleanup work');
    }
  }, []);

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
