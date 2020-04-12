import React from 'react';
import { shallow } from 'enzyme';
import SlotMachine from './SlotMachine';

let wrapper;

describe('SlotMachine', () => {
  it('renders a slot machine', () => {
    wrapper = shallow(<SlotMachine />);
    expect(wrapper.text()).toMatch('Slot Machine');
  });
});
