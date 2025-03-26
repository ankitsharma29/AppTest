import React, {useContext, useEffect} from 'react';
import {Provider} from 'react-redux';
import {Platform, Text, TextInput} from 'react-native';
import SafeAreaComponent from './src/screens/SafeAreaComponent';
import store from './src/store/store';

// Set the custom Text component as the default Text component.
if (Text.defaultProps == null) Text.defaultProps = {};
Text.defaultProps = {...Text.defaultProps, ...{allowFontScaling: false}};
TextInput.defaultProps = {
  ...TextInput.defaultProps,
  ...{allowFontScaling: false},
};
const App = () => {
  return (
    <Provider store={store}>
        <SafeAreaComponent edges={['top', 'right', 'left']} />
    </Provider>
  );
};

export default App;
