import React, { Fragment } from 'react';
import { shallow } from 'enzyme';
import Button from '@material-ui/core/Button';
import ActionButton from './ActionButton';
import shuffleActionModule from './shuffleAction';

describe('ActionButton', () => {
  let button, props, shuffleActions, wrapper;

  beforeEach(() => {
    shuffleActionModule.onMouseDownSound = { play: jest.fn() };
    shuffleActionModule.onMouseUpSound = { play: jest.fn() };

    shuffleActions = [];
    shuffleActionModule.shuffleAction = jest.fn((id, delay) => {
      shuffleActions.push({ id, delay });
    });

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
      wrapper = shallow(<ActionButton { ...props } />);
      button = wrapper.find(Button);

      expect(button.text()).toEqual('Shuffle!');
    });
  });

  it('dispatches a shuffleAction for each SlotReel when clicked', () => {
    wrapper = shallow(<ActionButton { ...props } />);
    button = wrapper.find(Button);
    const clickHandler = button.props().onMouseUp;
    clickHandler({});

    expect(shuffleActions).toEqual([
      { id: props.slotReelIds[0], delay: 0 },
      { id: props.slotReelIds[1], delay: 500 }
    ]);
  });
});
