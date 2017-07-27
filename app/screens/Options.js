import React, { Component } from 'react';
import { ScrollView, StatusBar } from 'react-native';
import { ListItem, Separator } from '../components/List';

// TODO: this icon shit does not work getting an error about empty folder Entypo.ttf fml
// import { Ionicons } from '@expo/vector-icons';

export default class Options extends Component {
    onThemePress() {

    }

    onLinkPress() {

    }

    render() {
        return(
            <ScrollView>
                <StatusBar barStyle='default' translucent={false} />
                <ListItem
                    text='Theme'
                    onPress={() => this.onThemePress()}
                />
                <Separator />
                <ListItem
                    text='Fixer.io'
                    onPress={() => this.onLinkPress()}
                />
                <Separator />
            </ScrollView>
        )
    }
}
