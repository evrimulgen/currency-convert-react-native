import React from 'react';
import {
    View,
    StatusBar
} from 'react-native';

import EStyleSheet from 'react-native-extended-stylesheet';

import Container from '../components/Container';
import Logo from '../components/Logo';

EStyleSheet.build({
    $primaryBackground: '#4F6D7F',
    $white: '#fff',
});

export default Home = () => (
    <Container>
        <StatusBar translucent={false} barStyle='light-content' />
        <Logo />
        <View />
    </Container>
);