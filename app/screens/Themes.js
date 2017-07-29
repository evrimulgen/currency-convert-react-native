import React, { Component } from 'react';
import { StatusBar, ScrollView } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import PropTypes from 'prop-types';

import { ListItem, Separator } from '../components/List';

const styleColors = EStyleSheet.create({
    $blue: '$primary',
    $orange: '$primaryOrange',
    $green: '$primaryGreen',
    $purple: '$primaryPurple',
});

export default class Themes extends Component {
    static propTypes = {
        navigation: PropTypes.object
    };

    onSelectTheme(color) {
        // handle theme change
        this.props.navigation.goBack(null);
    }

    render() {
        return(
            <ScrollView>
                <StatusBar barStyle='default' translucent={false} />
                <ListItem
                    text='Blue'
                    onPress={() => this.onSelectTheme()}
                    selected
                    checkmark={false}
                    iconColor={styleColors.$blue}
                />
                <Separator />
                <ListItem
                    text='Orange'
                    onPress={() => this.onSelectTheme()}
                    selected
                    checkmark={false}
                    iconColor={styleColors.$orange}
                />
                <Separator />
                <ListItem
                    text='Green'
                    onPress={() => this.onSelectTheme()}
                    selected
                    checkmark={false}
                    iconColor={styleColors.$green}
                />
                <Separator />
                <ListItem
                    text='Blue'
                    onPress={() => this.onSelectTheme()}
                    selected
                    checkmark={false}
                    iconColor={styleColors.$purple}
                />
                <Separator />

            </ScrollView>
        )
    }
}
