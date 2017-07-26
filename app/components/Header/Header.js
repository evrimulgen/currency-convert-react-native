import React from 'react';
import { Image, View, TouchableOpacity } from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';

const Header = ({ onPress}) => (
    <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Image
                source={require('./images/gear.png')}
                style={styles.image}
                resizeMode='contain' />
        </TouchableOpacity>
    </View>
);

Header.propTypes = {
    onPress: PropTypes.func
};

export default Header;
