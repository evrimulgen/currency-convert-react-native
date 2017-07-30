import React, { Component } from 'react';
import { StatusBar, ScrollView } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { changeThemeColor } from '../actions/themes';
import { ListItem, Separator } from '../components/List';

const styleColors = EStyleSheet.create({
    $blue: '$primary',
    $orange: '$primaryOrange',
    $green: '$primaryGreen',
    $purple: '$primaryPurple',
});

class Themes extends Component {
    static propTypes = {
        navigation: PropTypes.object,
        dispatch: PropTypes.func
    };

    onSelectTheme(color) {
        this.props.dispatch(changeThemeColor(color));
        this.props.navigation.goBack(null);
    }

    render() {
        return(
            <ScrollView>
                <StatusBar barStyle='default' translucent={false} />
                <ListItem
                    text='Blue'
                    onPress={() => this.onSelectTheme(styleColors.$blue)}
                    selected
                    checkmark={false}
                    iconColor={styleColors.$blue}
                />
                <Separator />
                <ListItem
                    text='Orange'
                    onPress={() => this.onSelectTheme(styleColors.$orange)}
                    selected
                    checkmark={false}
                    iconColor={styleColors.$orange}
                />
                <Separator />
                <ListItem
                    text='Green'
                    onPress={() => this.onSelectTheme(styleColors.$green)}
                    selected
                    checkmark={false}
                    iconColor={styleColors.$green}
                />
                <Separator />
                <ListItem
                    text='Blue'
                    onPress={() => this.onSelectTheme(styleColors.$purple)}
                    selected
                    checkmark={false}
                    iconColor={styleColors.$purple}
                />
                <Separator />

            </ScrollView>
        )
    }
}

export default connect()(Themes);
