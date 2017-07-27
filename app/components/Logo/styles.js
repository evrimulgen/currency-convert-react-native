import { Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const imageWidth = Dimensions.get('window').width / 2;

export default EStyleSheet.create({
    $largeContainerWidth: imageWidth,
    $largeImageWidth: imageWidth / 2,
    $smallContainerWidth: imageWidth / 2,
    $smallImageWidth: imageWidth / 4,
    container: {
        alignItems: 'center'
    },
    containerImage: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '$largeContainerWidth',
        height: '$largeContainerWidth'
    },
    image: {
        width: '$largeImageWidth'
    },
    headerText: {
        fontSize: 28,
        color: '$white',
        letterSpacing: -0.5,
        fontWeight: '600',
        marginTop: 15
    }
})