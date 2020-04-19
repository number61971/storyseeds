import shuffleEventModule, { SHUFFLE_EVENT } from './shuffleEvent';

describe('shuffleEvent', () => {
  it('creates a JS CustomEvent with the supplied delay', () => {
    const delay = 1000;
    const event = shuffleEventModule.shuffleEvent(delay);

    expect(event instanceof CustomEvent).toBeTruthy();
    expect(event.type).toEqual(SHUFFLE_EVENT);
    expect(event.detail.delay).toEqual(delay);
  });
});
