import React from 'react';
import { render } from 'enzyme';
import App from './App';

describe('App', () => {
  it('renders a header', () => {
    const wrapper = render(<App />);
    expect(wrapper.text()).toMatch('Story Seeds');
  });
});
