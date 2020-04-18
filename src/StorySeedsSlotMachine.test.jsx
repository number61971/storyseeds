import React from 'react';
import { shallow } from 'enzyme';
import StorySeedsSlotMachine from './StorySeedsSlotMachine';

let wrapper;

describe('SlotMachine', () => {
  it('renders a slot machine', () => {
    wrapper = shallow(<StorySeedslotMachine />);
    expect(wrapper.text()).toMatch('Slot Machine');
  });
});
