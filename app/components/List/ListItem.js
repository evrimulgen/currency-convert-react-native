import React from 'react';
import {
    Text,
    View,
    TouchableHighlight,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

import Icon from './Icon';

const ListItem = ({
        text,
        onPress,
        selected = false,
        checkmark = true,
        visible = true,
        iconColor
}) => (
    <TouchableHighlight onPress={onPress} underlayColor={styles.$underlayColor}>
        <View style={styles.row}>
            <Text style={styles.textStyle}>
                {text}
            </Text>
            {selected ? <Icon checkmark={checkmark} visible={visible} iconColor={iconColor} /> : <Icon />}
        </View>
    </TouchableHighlight>
);

ListItem.propTypes = {
    text: PropTypes.string,
    onPress: PropTypes.func,
    selected: PropTypes.bool,
    checkmark: PropTypes.bool,
    visible: PropTypes.bool,
    iconColor: PropTypes.string
};

export default ListItem;
