import React from 'react';
import {
    Text,
    View,
    TextInput,
    TouchableHighlight,
} from 'react-native';
import PropTypes from 'prop-types';
import color from 'color';

import styles from './styles';

const InputWithButton = (props) => {
    const { onPress, buttonText, editable = true, textColor } = props;
    const containerStyles = [styles.container];

    if (!editable) {
        containerStyles.push(styles.disabledInput)
    }

    const buttonUnderlay = color(styles.$buttonColor).darken(styles.$buttonModifier);

    const textStyle = [styles.buttonText];
    if (textColor) {
        textStyle.push({color: textColor});
    }
    return (
       <View style={containerStyles}>
           <TouchableHighlight
               underlayColor={buttonUnderlay}
               style={styles.buttonWrapper}
               onPress={onPress}
           >
               <Text
                   style={textStyle}
               >
                   {buttonText}
               </Text>
           </TouchableHighlight >
           <View style={styles.border} />
           <TextInput
               style={styles.input}
               underlineColorAndroid='transparent'
               {...props}
           />
       </View>
    )
};

InputWithButton.propTypes = {
    onPress: PropTypes.func,
    buttonText: PropTypes.string,
    editable: PropTypes.bool,
    textColor: PropTypes.string
};

export default InputWithButton;