import React from 'react';
import {create} from 'react-test-renderer';
import MyScreen from '../src/MyScreen';

const tree = create(<MyScreen />);

test('snapshot', () => {
  expect(tree).toMatchSnapshot();
});
