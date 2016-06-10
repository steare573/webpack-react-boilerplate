/**
 * Main reducer combining all of our smaller, more specific reducers.
 *
 * @author Sean Teare <steare573@gmail.com>
 * @since 2016-06-08
 */

import { combineReducers } from 'redux';
import ui from './ui';

export default combineReducers({
  ui,
});
