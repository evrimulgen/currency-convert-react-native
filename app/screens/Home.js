import React from 'react';
import {
    View,
    StatusBar
} from 'react-native';

import EStyleSheet from 'react-native-extended-stylesheet';

import Container from '../components/Container';

EStyleSheet.build({
    $primaryBackground: '#4F6D7F'
});

export default Home = () => (
    <Container>
        <StatusBar translucent={false} barStyle='light-content' />
        <View />
    </Container>
);