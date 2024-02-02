import React from 'react';
import { useEmojiContext } from './context/EmojiContext';

function EmojiChanger() {
  const {currentEmoji, handleUpdateEmoji} = useEmojiContext();

  return (
    <div className='emojiChanger componentBox'>
      Current emoji: {currentEmoji}
      <button onClick={() => handleUpdateEmoji('cool')}> Set cool emoji</button>
      <button onClick={() => handleUpdateEmoji('sick')}> set sick emoji </button>
    </div>
  );
}

export default EmojiChanger;