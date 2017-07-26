import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20
    },
    image: {
        width: 20,
        marginRight: 11
    },
    text: {
        color: '$white',
        fontWeight: '300',
        fontSize: 14
    }
})
