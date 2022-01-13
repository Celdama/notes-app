import React from 'react';
import {
  Wrapper,
  Content,
  Button,
  DeleteButton,
  TrashIcon,
} from './Sidebar.styles';

const Sidebar = ({
  notes,
  currentNote,
  setCurrentNoteId,
  newNote,
  deleteNote,
}) => {
  const noteElements = notes.map(({ id, body }) => (
    <div key={id}>
      <div
        className={`title ${id === currentNote.id ? 'selected-note' : ''}`}
        onClick={() => setCurrentNoteId(id)}
      >
        <h4 className='text-snippet'>{body.split('\n')[0]}</h4>
        <DeleteButton
          className='delete-btn'
          onClick={(event) => deleteNote(event, id)}
        >
          <TrashIcon />
        </DeleteButton>
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
