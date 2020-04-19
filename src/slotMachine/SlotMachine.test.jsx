import React from 'react';
import { shallow } from 'enzyme';
import ActionButton from './ActionButton';
import SlotMachine from './SlotMachine';
import SlotReel from './SlotReel';

describe('SlotMachine', () => {
  let props, slotMachine, wrapper;

  beforeEach(() => {
    props = {
      slotReels: [
        {
          id: 'slot1',
          items: ['master shake', 'meatwad'],
        },
        {
          id: 'slot2',
          items: ['frylock', 'carl'],
        },
      ],
      actionProps: {
        buttonLabel: 'DO IT!'
      }
    };

    wrapper = shallow(<SlotMachine { ...props } />);
    slotMachine = wrapper.find(SlotMachine);
  });

  it('renders a slot machine with SlotReels based on supplied props', () => {
    const slotReels = wrapper.find(SlotReel);
    expect(slotReels.length).toEqual(2);

    expect(slotReels.at(0).props()).toEqual(props.slotReels[0]);
    expect(slotReels.at(1).props()).toEqual(props.slotReels[1]);
  });

  it('renders a slot machine with an ActionButton based on supplied props', () => {
    const actionButton = wrapper.find(ActionButton);
    expect(actionButton.length).toEqual(1);

    const expectedProps = {
      ...props.actionProps,
      slotReelIds: props.slotReels.map(sr => sr.id)
    };
    expect(actionButton.props()).toEqual(expectedProps);
  });
});
