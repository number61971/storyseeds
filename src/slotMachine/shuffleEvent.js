export const SHUFFLE_EVENT = 'shuffle-slot-machine';

function shuffleEvent(delay) {
  return new CustomEvent(
    SHUFFLE_EVENT,
    { detail: { delay } }
  );
}

const shuffleEventModule = {
  shuffleEvent
};

export default shuffleEventModule;
