import React from 'react';
import {
    View
} from 'react-native';
import PropsType from 'prop-types';
import styles from './styles';

const Container = ({children}) => (
    <View style={styles.container}>
        {children}
    </View>
);

Container.propTypes = {
    children: PropsType.any
};

export default Container;