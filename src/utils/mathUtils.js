import {track} from './analyticsUtils';

export function addNumbers(x, y) {
  track('addNumbers');
  return x + y;
}
