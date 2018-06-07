import React from 'react';
import { shallow } from 'enzyme'
//it only render the given component
//import ReactShallowRenderer from 'react-test-renderer/shallow';
import Header from '../../components/Header';

test('should render Header correctly', () => {
  // const renderer = new ReactShallowRenderer();
  // renderer.render(<Header />);
  // expect(renderer.getRenderOutput()).toMatchSnapshot();
  const wrapper = shallow(<Header />);
  //expect(wrapper.find('h1').text()).toBe('Expensify');
  //expect(toJSON(wrapper)).toMatchSnapshot();// fue configurado en jest.config.json
  expect(wrapper).toMatchSnapshot();
});

