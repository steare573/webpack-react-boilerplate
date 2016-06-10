import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import InputTemplate from './Template';
import { setInputText } from '../../redux/action/ui';

// Classic way of using connect
// function InputContainer(props) {
//   return (
//     <InputTemplate {...props} />
//   );
// }

// export default connect(
//   state => ({
//     inputText: state.ui.inputText,
//   }),
//   dispatch => bindActionCreators( { setInputText }, dispatch)
// )(InputContainer);

// you can use decorators for connect, but you must use a class, which throws an eslint error

@connect(
  state => ({
    inputText: state.ui.inputText,
  }),
  dispatch => bindActionCreators({ setInputText }, dispatch)
)
/* eslint-disable react/prefer-stateless-function */
export default class InputContainerClass extends React.Component {
  render() {
    return (
      <InputTemplate {...this.props} />
    );
  }
}
