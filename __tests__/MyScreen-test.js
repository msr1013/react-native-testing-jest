import React from 'react';
import {create, act} from 'react-test-renderer';
import MyScreen from '../src/MyScreen';

const tree = create(<MyScreen />);

test('snapshot', () => {
  expect(tree).toMatchSnapshot();
});

test('call timeout', () => {
  act(() => jest.runAllTimers());

  const text = tree.root.findByProps({testID: 'myText'}).props;
  expect(text.children).toEqual('timeout is called');
});
