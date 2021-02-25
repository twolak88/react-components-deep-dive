import { useEffect } from 'react';
import classes from './Cockpit.module.css';

const Cockpit = (props) => {

  useEffect(() => {
    console.log('[Cockpit] useEffect');
  });

  let parClasses = [];
  let buttonClass = '';

  if (props.personsLength <= 2) {
    parClasses.push(classes.red);
  }
  if (props.personsLength <= 1) {
    parClasses.push(classes.bold);
  }

  if (props.showPersons) {
    buttonClass = classes.Red;
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={parClasses.join(' ')}>
        {!props.personsLength
          ? 'No person'
          : props.personsLength +
            (props.personsLength > 1 ? ' people' : ' person')}{' '}
        on the list!
      </p>
      <button className={buttonClass} onClick={props.clicked}>
        Toggle Persons
      </button>
    </div>
  );
};

export default Cockpit;
