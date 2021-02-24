import Person from './Person/Person';

const persons = (props) => {
  console.log('[Persons] rendering...');
  return props.persons.map((person, idx) => <Person
        name={person.name}
        age={person.age}
        clicked={() => props.clicked(idx)}
        key={person.id}
        changed={(event) => props.changed(event, person.id)}
      />
  )};

export default persons;
