import React from 'react';

class EmojiContainer extends React.Component {

  createEmojis = () => {
      let allEmojis = ['🦁', '👑'];

      let emojiList = allEmojis.map(emoji => (
        <h1 className="emoji-size">{emoji}</h1>
    ));

      return emojiList;
  };

  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-12">
            <div className="text-center d-flex justify-content-center">
              {this.createEmojis()}
            </div>
          </div>
        </div>
      </div>
    )
  }
};

export default EmojiContainer;
