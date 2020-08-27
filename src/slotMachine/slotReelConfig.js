// NB: Nothing in this file is tested because of direct DOM manipulation or
// direct JS audio device access

import randomIndex from './random';
import { SHUFFLE_EVENT } from './shuffleEvent';

function setup(elementId, items) {
  const config = {
    active: randomIndex(0, items.length),
  };

  const slotMachineElem = document.querySelector(`#${elementId}`);
  const slotMachine = new window.SlotMachine(slotMachineElem, config);

  const spinningReelSound = new Audio('/audio/spinning_reel.mp3');

  const spinStopSound = new Audio('/audio/slot_stop.mp3');
  const onComplete = () => { spinStopSound.play() };

  slotMachineElem.addEventListener(SHUFFLE_EVENT, (event) => {
    setTimeout(() => {
      spinningReelSound.play();
      slotMachine.shuffle(5, onComplete);
    },
    event.detail.delay
    );
  });
}

const slotReelConfigModule = {
  setup
};

export default slotReelConfigModule;
