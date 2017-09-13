import React from 'react';
import { shallow } from 'enzyme';

import App from './App';
import Spinner from './components/Spinner';
import { Route } from 'react-router-dom';

describe('App', () => {
  it('should display a Spinner if peopleLoading is true', () => {
    const wrapper = shallow(<App peopleLoading={true} />);
    expect(wrapper.containsMatchingElement(<Spinner />)).toBe(true);
  });

  it('should have routes configured if peopleLoading is false', () => {
    const wrapper = shallow(<App peopleLoading={false} />);
    expect(wrapper.containsMatchingElement(<Route path="/all" />)).toBe(true);
  });
});