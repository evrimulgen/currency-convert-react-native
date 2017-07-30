import React, { Component } from 'react';
import {
    View,
    FlatList,
    StatusBar
} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { selectMainCurrency, selectQuoteCurrency } from '../actions/currencies';
import currencyList from '../data/currencyList';
import { ListItem, Separator } from '../components/List'

const TEMP_SELECTED_ITEM = 'CAD';
class CurrencyList extends Component {
    static porpTypes = {
        navigation: PropTypes.object,
        dispatch: PropTypes
    };

    onSelectItem(value) {
        let { type } = this.props.navigation.state.params;
        console.log('this shit', value);
        if (type === 'base') {
            this.props.dispatch(selectMainCurrency(value))
        }

        if (type === 'quote') {
            this.props.dispatch(selectQuoteCurrency(value))
        }
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
                            onPress={() => this.onSelectItem(item)}
                        />
                    )}
                    keyExtractor={(item) => item}
                    ItemSeparatorComponent={Separator}
                />
            </View>
        )
    }
}

export default connect()(CurrencyList);