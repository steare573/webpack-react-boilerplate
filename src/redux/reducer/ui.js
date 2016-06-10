/**
 * Reducer for altering our ui data.
 *
 * @author Sean Teare <steare573@gmail.com>
 * @since 2016-06-08
 */

import createReducer from '../util/createReducer';

const initialState = {
  inputText: '',
};

export default createReducer(initialState, {
  SET_INPUT_TEXT: (state, action) => Object.assign({}, state, { inputText: action.inputText }),
});
