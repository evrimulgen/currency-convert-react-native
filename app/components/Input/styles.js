import { StyleSheet } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const BORDER_RADIUS = 5;
const INPUT_HEIGHT = 48;

export default EStyleSheet.create({
    $buttonColor: '$white',
    $buttonModifier: 0.1,

    container: {
        backgroundColor: '$white',
        flexDirection: 'row',
        alignItems: 'center',
        width: '90%',
        height: INPUT_HEIGHT,
        borderRadius: BORDER_RADIUS,
        marginVertical: 11
    },
    buttonWrapper: {
        borderBottomLeftRadius: BORDER_RADIUS,
        borderTopLeftRadius: BORDER_RADIUS,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '$white',
        height: INPUT_HEIGHT
    },
    buttonText: {
        color: '$primary',
        fontWeight: '600',
        fontSize: 20,
        paddingHorizontal: 15,
    },
    border: {
        height: INPUT_HEIGHT,
        borderColor: '$border',
        borderWidth: StyleSheet.hairlineWidth
    },
    input: {
        flex: 1,
        fontSize: 18,
        color: '$textMain',
        height: INPUT_HEIGHT,
        paddingHorizontal: 10,
    },
    disabledInput: {
        backgroundColor: '$lightGrey'
    },
});
