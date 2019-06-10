import React from 'react';
import { shallow } from 'enzyme'
import LandingPage from './LandingPage'

describe('<LandingPage />', () => {
  it('has a button with Sign Up', () => {
    const wrapper = shallow(<LandingPage />);
    expect(wrapper.find('button').text()).toEqual('Sign Up')
  })
})
