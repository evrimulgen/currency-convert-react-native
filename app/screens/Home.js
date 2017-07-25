import React, { Component } from 'react';
import {
    View,
    StatusBar
} from 'react-native';

import EStyleSheet from 'react-native-extended-stylesheet';

import Container from '../components/Container';
import Logo from '../components/Logo';
import { InputWithButton } from '../components/Input';

const TEMP_MAIN_CURRENCY    = 'USD';
const TEMP_QUOTE_CURRENCY   = 'GBP';
const TEMP_MAIN_VALUE       = '100';
const TEMP_QUOTE_VALUE      = '76.9';

EStyleSheet.build({
    $primary: '#4F6D7F',
    $white: '#fff',
    $border: '#E2E2E2',
    $textMain: '#797979',
    $lightGrey: '#F0F0F0'
});

export default class Home extends Component {
    onQuotePress() {

    }

    onMainPress() {

    }

    onType(text) {

    }

    render() {
        return(
            <Container>
                <StatusBar translucent={false} barStyle='light-content' />
                <Logo />
                <InputWithButton
                    buttonText={TEMP_MAIN_CURRENCY}
                    editable={true}
                    onPress={() => this.onMainPress()}
                    defaultValue={TEMP_MAIN_VALUE}
                    keyboardType='numeric'
                    onChangeText={(text) => this.onType(text)}
                />
                <InputWithButton
                    buttonText={TEMP_QUOTE_CURRENCY}
                    editable={false}
                    onPress={() => this.onQuotePress()}
                    value={TEMP_QUOTE_VALUE}
                />
                <View />
            </Container>
        )
    }
};