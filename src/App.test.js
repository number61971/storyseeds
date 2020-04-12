import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import AppBar from '@material-ui/core/AppBar';
import SlotMachine from './SlotMachine';

let wrapper;

describe('App', () => {
  it('renders a header in the top app bar', () => {
    wrapper = shallow(<App />);
    const appBar = wrapper.find(AppBar);
    expect(appBar.text()).toMatch('Story Seeds');
  });

  it('renders a slot machine', () => {
    wrapper = shallow(<App />);
    const slotMachine = wrapper.find(SlotMachine);
    expect(slotMachine.length).toEqual(1);
  });
});
