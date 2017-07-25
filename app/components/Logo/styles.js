import { Dimensions } from 'react-native';
import EStyleSheets from 'react-native-extended-stylesheet';

const imageWidth = Dimensions.get('window').width / 2;

export default EStyleSheets.create({
    container: {
        alignItems: 'center'
    },
    containerImage: {
        justifyContent: 'center',
        alignItems: 'center',
        width: imageWidth,
        height: imageWidth
    },
    image: {
        width: imageWidth / 2
    },
    headerText: {
        fontSize: 28,
        color: '$white',
        letterSpacing: -0.5,
        fontWeight: '600',
        marginTop: 15
    }
})