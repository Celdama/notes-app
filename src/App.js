import { useState, useEffect } from 'react';
import { data } from './data';
import Split from 'react-split';
import { nanoid } from 'nanoid';
import Sidebar from './components/Sidebar';
import Editor from './components/Editor';
import NoNote from './components/NoNote';
import { GlobalStyle } from './GlobalStyle';

const App = () => {
  const [notes, setNotes] = useState(
    () => JSON.parse(localStorage.getItem('notes')) || []
  );

  const [currentNoteId, setCurrentNoteId] = useState(
    (notes[0] && notes[0].id) || ''
  );

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const createNewNote = () => {
    const newNote = {
      id: nanoid(),
      body: "# Type your markdown note's title here",
    };
    setNotes((prevNotes) => [newNote, ...prevNotes]);
    setCurrentNoteId(newNote.id);
  };

  const updateNote = (text) => {
    // try to rearrange the most recently-modified
    setNotes((oldNotes) => {
      const newArray = [];

      oldNotes.forEach((oldNote) => {
        if (oldNote.id === currentNoteId) {
          newArray.unshift({ ...oldNote, body: text });
        } else {
          newArray.push(oldNote);
        }
      });

      return newArray;
    });
  };

  const findCurrentNote = () => {
    return (
      notes.find((note) => {
        return note.id === currentNoteId;
      }) || notes[0]
    );
  };

  return (
    <main>
      {notes.length > 0 ? (
        <Split sizes={[30, 70]} direction='horizontal' className='split'>
          <Sidebar
            notes={notes}
            currentNote={findCurrentNote()}
            setCurrentNoteId={setCurrentNoteId}
            newNote={createNewNote}
          />
          {currentNoteId && notes.length > 0 && (
            <Editor currentNote={findCurrentNote()} updateNote={updateNote} />
          )}
        </Split>
      ) : (
        <NoNote createNewNote={createNewNote} />
      )}
      <GlobalStyle />
    </main>
  );
};

export default App;
