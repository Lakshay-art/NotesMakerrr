import Note from './Note';
import { CardGroup } from 'react-bootstrap';


const Notes = (props)=> {
    return (
        <CardGroup className=" p-2 d-block card-columns">
            {
                props.notes.map((note) => (
                    <Note note={note} key={note.id}></Note>
                    
                ))
            }
        </CardGroup>
    );
}

export default Notes;