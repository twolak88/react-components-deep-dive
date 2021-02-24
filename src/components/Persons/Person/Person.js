import classes from './Person.module.css';

const person = (props) => {
  return (
    <div className={classes.Person}>
      <p onClick={props.clicked}>
        He is {props.name} and he is {props.age}!
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default person;
