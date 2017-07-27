import React  from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';

import Home from './screens/Home';
import CurrencyList from './screens/CurrencyList';
import Options from './screens/Options';
import Themes from './screens/Themes';

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

export default App = () => <Themes/>


