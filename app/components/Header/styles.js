import EStyleSheet from 'react-native-extended-stylesheet';
import { StatusBar } from 'react-native';

export default EStyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        '@media ios': {
            paddingTop: 22
        },
        '@media android': {
            paddingTop: StatusBar.currentHeight
        }
    },
    button: {
        alignSelf: 'flex-end',
        paddingVertical: 5,
        paddingHorizontal: 20
    },
    image: {
        width: 15
    }
})