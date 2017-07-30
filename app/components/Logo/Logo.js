import React, { Component } from 'react';
import {
    View,
    Text,
    Platform,
    Keyboard,
    Animated
} from 'react-native';
import styles from './styles';
import PorpTypes from 'prop-types';

const LOGO_ANIMATION_DURATION = 300;

export default class Logo extends Component {
    static propTypes = {
        iconColor: PorpTypes.string
    };

    constructor(props) {
        super(props);

        this.containerImageWidth = new Animated.Value(styles.$largeContainerWidth);
        this.imageWidth = new Animated.Value(styles.$largeImageWidth);
    }

    componentDidMount() {
        let keyboardShowListener = 'keyboardWillShow';
        let keyboardHideListener = 'keyboardWillHide';

        if (Platform.OS === 'android') {
            keyboardShowListener = 'keyboardDidShow';
            keyboardHideListener = 'keyboardDidHide';
        }
        this.keyboardWillOpen = Keyboard.addListener(keyboardShowListener, () => {
            Animated.parallel([
                Animated.timing(this.containerImageWidth, {
                    toValue: styles.$smallContainerWidth,
                    duration: LOGO_ANIMATION_DURATION
                }),
                Animated.timing(this.imageWidth, {
                    toValue: styles.$smallImageWidth,
                    duration: LOGO_ANIMATION_DURATION
                })
            ]).start()
        });

        this.keyboardWillHide = Keyboard.addListener(keyboardHideListener, () => {
            Animated.parallel([
                Animated.timing(this.containerImageWidth, {
                    toValue: styles.$largeContainerWidth,
                    duration: LOGO_ANIMATION_DURATION
                }),
                Animated.timing(this.imageWidth, {
                    toValue: styles.$largeImageWidth,
                    duration: LOGO_ANIMATION_DURATION
                })
            ]).start()
        })
    }

    componentWillUnmount() {
        this.keyboardWillOpen.remove();
        this.keyboardWillHide.remove();
    }

    render() {
        const containerImageStyle = [
            styles.containerImage,
            { width: this.containerImageWidth, height: this.containerImageWidth }
        ];

        const imageStyle = [
            styles.image,
            { width: this.imageWidth },
            this.props.iconColor ? {tintColor: this.props.iconColor} : null
        ];

        return(
            <View style={styles.container}>
                <Animated.Image
                    style={containerImageStyle}
                    resizeMode='contain'
                    source={require('./images/background.png')}>
                    <Animated.Image
                        style={imageStyle}
                        resizeMode='contain'
                        source={require('./images/logo.png')} />
                </Animated.Image>
                <Text style={styles.headerText}>Currency Converter</Text>
            </View>
        )
    }
};
