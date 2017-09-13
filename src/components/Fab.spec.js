import React from 'react';
import { shallow } from 'enzyme';
import Fab from './Fab';

test('clicked', () => {
  const onClick = jest.fn();
  
  shallow(<Fab onClick={onClick} />)
    .find('a')
    .first()
    .simulate('click');

  expect(onClick).toHaveBeenCalled();
});