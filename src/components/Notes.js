import Note from './Note';


const Notes = (props)=> {
    return (
        <div className='card-columns' >
            {
                props.notes.map((note) => (
                    <Note note={note} key={note.id}></Note>
                    
                ))
            }
        </div>
    );
}

export default Notes;