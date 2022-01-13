import React from 'react';
import { Wrapper, Content, Button } from './NoNote.styles';

const NoNote = ({ createNewNote }) => {
  return (
    <Wrapper>
      <Content className='no-notes'>
        <h1>You have no note</h1>
        <Button className='first-note' onClick={createNewNote}>
          Create one now
        </Button>
      </Content>
    </Wrapper>
  );
};

export default NoNote;
