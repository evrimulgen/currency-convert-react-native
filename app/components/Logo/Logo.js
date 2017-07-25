import React from 'react';
import {
    View,
    Text,
    Image
} from 'react-native';
import styles from './styles';

const Logo = () => (
    <View style={styles.container}>
        <Image
            style={styles.containerImage}
            resizeMode='contain'
            source={require('./images/background.png')}>
            <Image
                style={styles.image}
                resizeMode='contain'
                source={require('./images/logo.png')} />
        </Image>
        <Text style={styles.headerText}>Currency Converter</Text>
    </View>
);

export default Logo;