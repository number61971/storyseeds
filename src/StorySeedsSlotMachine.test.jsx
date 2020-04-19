import React from 'react';
import { shallow } from 'enzyme';
import StorySeedsSlotMachine from './StorySeedsSlotMachine';
import SlotMachine from './slotMachine/SlotMachine';

describe('StorySeedsSlotMachine', () => {
  it('renders a slot machine with the expected props', () => {
    const wrapper = shallow(<StorySeedsSlotMachine />);
    const slotMachine = wrapper.find(SlotMachine);
    expect(slotMachine.length).toEqual(1);

    const componentProps = slotMachine.props();
    const slotReels = componentProps.slotReels;
    expect(slotReels.length).toEqual(2);

    const slotReelIds = slotReels.map(sr => sr.id);
    expect(slotReelIds).toEqual(['adjectives-reel', 'nouns-reel']);

    expect(slotReels[0].items.length > 0).toBeTruthy();
    expect(slotReels[1].items.length > 0).toBeTruthy();
  });
});
