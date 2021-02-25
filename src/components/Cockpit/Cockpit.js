import React, { useEffect, useRef, useContext } from 'react';
import classes from './Cockpit.module.css';
import AuthContext from '../../context/auth-context';

const Cockpit = (props) => {

  const toggleButtonRef = useRef(null);
  const authContext = useContext(AuthContext);

  useEffect(() => {
    console.log('[Cockpit] useEffect1');
    toggleButtonRef.current.click();
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
  }, [props.personsLength]);

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
      <button 
        ref={toggleButtonRef}
        className={buttonClass} 
        onClick={props.clicked}>
        Toggle Persons
      </button>
      <button onClick={authContext.login}>Log in</button>
    </div>
  );
};

export default React.memo(Cockpit);
