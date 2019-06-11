import React from 'react';
import { shallow } from 'enzyme';
import Signup from './Signup';
import axios from 'axios';

describe('<Signup />', () => {
  it('Has the right amount of inputs', () => {
    const wrapper = shallow(<Signup />);
    expect(wrapper.find('input').length).toEqual(4);
  })
  it('Submits form data', () => {
    const wrapper = shallow(<Signup />);
    const fakeEvent = { preventDefault: () => console.log('preventDefault') };
    const spy = jest.spyOn(axios, 'post');
    let email = wrapper.find('#email');
    let username = wrapper.find('#username');
    let password = wrapper.find('#password');
    let form = wrapper.find('form');
    email.simulate('change', { target: { value: 'test@email.com' } })
    username.simulate('change', { target: { value: 'username' } })
    password.simulate('change', { target: { value: 'test@email.com' } })
    form.simulate('submit', fakeEvent)
    expect(spy).toHaveBeenCalled();
  })
})
