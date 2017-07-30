import React  from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Provider, connect } from 'react-redux';
import { addNavigationHelpers } from 'react-navigation';

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

const App = ({dispatch, nav}) => (
    <Navigator
        navigation={addNavigationHelpers({
            dispatch,
            state: nav
        })}
    />
);

const mapStateToProps = (state) => ({
    nav: state.nav
});

const AppWithNavigation = connect(mapStateToProps)(App);

export default () => (
    <Provider store={store}>
        <AppWithNavigation />
    </Provider>
)


