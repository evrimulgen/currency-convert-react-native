import React  from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Provider } from 'react-redux';

import Navigator from './config/router';
import store from './config/store';

EStyleSheet.build({
    $primary: '#4F6D7F',
    $primaryOrange: '#D57A66',
    $primaryGreen: '#00BD9D',
    $primaryPurple: '#9E768F',

    $white: '#fff',
    $border: '#E2E2E2',
    $textMain: '#797979',
    $lightGrey: '#F0F0F0',
    $darkText: '#343434'
});

export default App = () => (
    <Provider store={store}>
        <Navigator onNavigationStateChange={null} />
    </Provider>
)


