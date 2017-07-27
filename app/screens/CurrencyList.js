import React, { Component } from 'react';
import {
    Text,
    View,
    FlatList,
    StatusBar
} from 'react-native';

import currencyList from '../data/currencyList';
import { ListItem, Separator } from '../components/List'

const TEMP_SELECTED_ITEM = 'CAD';
class CurrencyList extends Component {
    onSelectItem() {

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