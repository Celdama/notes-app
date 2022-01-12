import React from 'react';
import { Wrapper, Content, Button } from './Sidebar.styles';

const Sidebar = ({ notes, currentNote, setCurrentNoteId, newNote }) => {
  const noteElements = notes.map((note, index) => (
    <div key={note.id}>
      <div
        className={`title ${note.id === currentNote.id ? 'selected-note' : ''}`}
        onClick={() => setCurrentNoteId(note.id)}
      >
        <h4 className='text-snippet'>Note {index + 1}</h4>
      </div>
    </div>
  ));

  return (
    <Wrapper className='pane sidebar'>
      <Content className='sidebar--header'>
        <h3>Notes</h3>
        <Button className='new-note' onClick={newNote}>
          +
        </Button>
      </Content>
      {noteElements}
    </Wrapper>
  );
};

export default Sidebar;
