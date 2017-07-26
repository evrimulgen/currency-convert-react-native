import React from 'react';
import {
    View,
    Image,
    Text,
    TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const ButtonSwitch = ({ text = 'Reverse', onPress }) => (
    <TouchableOpacity onPress={onPress}>
        <View style={styles.container}>
            <Image
                source={require('./images/icon.png')}
                style={styles.image}
                resizeMode='contain' />
            <Text style={styles.text}>
                {text}
            </Text>
        </View>
    </TouchableOpacity>
);

ButtonSwitch.propTypes = {
    text: PropTypes.string,
    onPress: PropTypes.func
};

export default ButtonSwitch;
