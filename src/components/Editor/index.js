import React, { useState } from 'react';
import ReactMde from 'react-mde';
import Showdown from 'showdown';
import { Wrapper } from './Editor.styles';
import 'react-mde/lib/styles/css/react-mde-all.css';

const Editor = ({ currentNote, updateNote }) => {
  const [selectedTab, setSelectedTab] = useState('write');

  const converter = new Showdown.Converter({
    tables: true,
    simplifiedAutoLink: true,
    strikethrough: false,
    tasklists: true,
    ghMentions: true,
    parseImgDimensions: true,
  });

  return (
    <Wrapper className='pane editor'>
      <ReactMde
        value={currentNote.body}
        onChange={updateNote}
        selectedTab={selectedTab}
        onTabChange={setSelectedTab}
        generateMarkdownPreview={(markdown) =>
          Promise.resolve(converter.makeHtml(markdown))
        }
        minEditorHeight={90}
        heightUnits='vh'
      />
    </Wrapper>
  );
};

export default Editor;
