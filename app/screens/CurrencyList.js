import React, { Component } from 'react';
import {
    View,
    FlatList,
    StatusBar
} from 'react-native';
import PropTypes from 'prop-types';

import currencyList from '../data/currencyList';
import { ListItem, Separator } from '../components/List'

const TEMP_SELECTED_ITEM = 'CAD';
class CurrencyList extends Component {
    static porpTypes = {
        navigation: PropTypes.object
    };

    onSelectItem() {
        this.props.navigation.goBack(null);
    }

    render () {
        return(
            <View style={{flex: 1}}>
                <StatusBar barStyle='default' translucent={false} />
                <FlatList
                    data={currencyList}
                    renderItem={({item}) => (
                        <ListItem
                            text={item}
                            selected={item === TEMP_SELECTED_ITEM}
                            onPress={() => this.onSelectItem()}
                        />
                    )}
                    keyExtractor={(item) => item}
                    ItemSeparatorComponent={Separator}
                />
            </View>
        )
    }
};

export default CurrencyList;