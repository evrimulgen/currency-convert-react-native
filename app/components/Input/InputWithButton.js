import React from 'react';
import {
    Text,
    View,
    TextInput,
    TouchableHighlight,
} from 'react-native';
import PropsType from 'prop-types';
import color from 'color';

import styles from './styles';

const InputWithButton = (props) => {
    const { onPress, buttonText, editable = true } = props;
    const containerStyles = [styles.container];

    if (!editable) {
        containerStyles.push(styles.disabledInput)
    }

    const buttonUnderlay = color(styles.$buttonColor).darken(styles.$buttonModifier);
    return (
       <View style={containerStyles}>
           <TouchableHighlight
               underlayColor={buttonUnderlay}
               style={styles.buttonWrapper}
               onPress={onPress}
           >
               <Text
                   style={styles.buttonText}
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
    onPress: PropsType.func,
    buttonText: PropsType.string,
    editable: PropsType.bool
};

export default InputWithButton;