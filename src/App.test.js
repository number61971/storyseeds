import React from 'react';
import { render } from 'enzyme';

describe('App', () => {
  let App
  , wrapper
  ;

  beforeEach(() => {
    jest.resetModules();

    App = require('./App').default;
  });

  it('renders a header', () => {
    wrapper = render(<App />);
  });
});
