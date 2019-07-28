import React from 'react';
import Navbar from './Navbar';
import EmojiContainer from './EmojiContainer';
import AnswerInput from './AnswerInput';
import ScoreCounter from './ScoreCounter';
import ProgressCounters from './ProgressCounters';

class App extends React.Component {

  render(){
    return (
            <div>
              <Navbar />
              <EmojiContainer />
              <AnswerInput />
              <ScoreCounter />
              <ProgressCounters />
            </div>
          )
  }
};

export default App;
