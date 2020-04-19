import React, { Fragment } from 'react';
import { shallow } from 'enzyme';
import Button from '@material-ui/core/Button';
import ActionButton from './ActionButton';
import shuffleEventModule from './shuffleEvent';

describe('ActionButton', () => {
  let button, props, wrapper;

  beforeEach(() => {
    shuffleEventModule.shuffleEvent = jest.fn((value) => `Received ${value}`);

    props = {
      slotReelIds: ['slot1', 'slot2'],
    };
  });

  it('renders a Button with the supplied props', () => {
    props.buttonLabel = 'BANG!';
    wrapper = shallow(<ActionButton { ...props } />);
    
    button = wrapper.find(Button);
    expect(button.length).toEqual(1);
    expect(button.text()).toEqual(props.buttonLabel);
  });

  describe('when no buttonLabel property is supplied', () => {
    it('defaults the button label to "Shuffle!"', () => {
      props = {
        slotReelIds: ['slot1', 'slot2'],
      };
      wrapper = shallow(<ActionButton { ...props } />);
      button = wrapper.find(Button);

      expect(button.text()).toEqual('Shuffle!');
    });
  });

  it('dispatches a shuffleEvent for each SlotReel when clicked', () => {
    wrapper = shallow(<ActionButton { ...props } />);
    wrapper.simulate('click');
    expect(shuffleEventModule.shuffleEvent).toBeCalled();
  });
});
