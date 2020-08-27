import React from 'react';
import { mount, shallow } from 'enzyme';
import SlotReel from './SlotReel';
import slotReelConfigModule from './slotReelConfig';

describe('SlotReel', () => {
  let props, wrapper;

  beforeEach(() => {
    slotReelConfigModule.setup = jest.fn();

    props = {
      id: 'slot1', 
      items: ['master shake', 'meatwad', 'frylock'],
    };
  });

  it('configures the SlotReels', () => {
    wrapper = mount(<SlotReel { ...props } />);
    expect(slotReelConfigModule.setup).toHaveBeenCalledWith(props.id, props.items);
  });

  it('renders a slot reel for each set of supplied properties', () => {
    wrapper = shallow(<SlotReel { ...props } />);

    const slotReelContainer = wrapper.first();
    expect(slotReelContainer.props().id).toEqual(props.id);

    const items = slotReelContainer.children();
    expect(items.length).toEqual(3);

    expect(items.at(0).text()).toEqual(props.items[0]);
    expect(items.at(1).text()).toEqual(props.items[1]);
    expect(items.at(2).text()).toEqual(props.items[2]);
  });
});
