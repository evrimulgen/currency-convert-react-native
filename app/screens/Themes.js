import React, { Component } from 'react';
import { View, StatusBar, ScrollView } from 'react-native';

import EStyleSheet from 'react-native-extended-stylesheet';
import { ListItem, Separator } from '../components/List';

const styleColors = EStyleSheet.create({
    $blue: '$primary',
    $orange: '$primaryOrange',
    $green: '$primaryGreen',
    $purple: '$primaryPurple',
});

export default class Themes extends Component {
    onSelectTheme(color) {

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
