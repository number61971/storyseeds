import React, { useEffect } from 'react';
import { shallow } from 'enzyme';
import SlotReel from './SlotReel';

describe('SlotReel', () => {
  it('renders a slot reel for each set of supplied properties', () => {
    const props = {
      id: 'slot1', 
      items: ['master shake', 'meatwad', 'frylock'],
    };
    const wrapper = shallow(<SlotReel { ...props } />);

    const slotReelContainer = wrapper.first();
    expect(slotReelContainer.props().id).toEqual(props.id);

    const items = slotReelContainer.children();
    expect(items.length).toEqual(3);

    expect(items.at(0).text()).toEqual(props.items[0]);
    expect(items.at(1).text()).toEqual(props.items[1]);
    expect(items.at(2).text()).toEqual(props.items[2]);
  });

  // TODO: Challenging because of direct DOM manipulation, including use of
  // functional globally attached to the window object
  //it('listens for the SHUFFLE_EVENT', () => {
  //});
});
