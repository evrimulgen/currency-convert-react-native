import EStyleSheet from 'react-native-extended-stylesheet';
import { StyleSheet } from 'react-native';

export default EStyleSheet.create({
    $underlayColor: '$border',
    row: {
        paddingHorizontal: 20,
        paddingVertical: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'

    },
    textStyle: {
        color: '$darkText',
        fontSize: 16
    },
    separator: {
        height: StyleSheet.hairlineWidth,
        backgroundColor: '$border',
        marginLeft: 20,
        flex: 1
    },
    checkmarkIconWrapper: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center'
    },
    checkmarkIcon: {
        width: 15
    },
    checkmarkVisible: {
        backgroundColor: '$primary'
    }
})
