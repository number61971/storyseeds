// NB: Nothing in this file is tested because of direct DOM manipulation or
// direct JS audio device access

import shuffleEventModule from './shuffleEvent';

function shuffleAction(elementId, delay) {
  const slotReelElem = document.querySelector(`#${elementId}`);
  slotReelElem.dispatchEvent(
    shuffleEventModule.shuffleEvent(delay)
  );
}

const onMouseDownSound = new Audio('/audio/button_press.mp3');
const onMouseUpSound = new Audio('/audio/button_up.mp3');

const shuffleActionModule = {
  onMouseDownSound,
  onMouseUpSound,
  shuffleAction
};

export default shuffleActionModule;
