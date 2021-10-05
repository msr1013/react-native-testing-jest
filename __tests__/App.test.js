import {track} from '../src/utils/analyticsUtils';
import {addNumbers} from '../src/utils/mathUtils';

jest.mock('../src/utils/analyticsUtils');
test('add numbers ', () => {
  expect(addNumbers(1, 2)).toEqual(3);
  expect(track).toBeCalledWith('addNumbers');
});
