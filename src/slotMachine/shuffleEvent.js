export const SHUFFLE_EVENT = 'shuffle-slot-machine';

export default function shuffleEvent(delay) {
  return new CustomEvent(
    SHUFFLE_EVENT,
    { detail: { delay } }
  );
}
