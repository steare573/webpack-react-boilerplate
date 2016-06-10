import React from 'react';
import store from '../redux/store';
import { Provider } from 'react-redux';
import Input from './input/Container';

export default function Main() {
  return (
    <Provider store={store}>
      <div>
        <div>Webpack React Boilerplate</div>
        <Input />
      </div>
    </Provider>
  );
}
