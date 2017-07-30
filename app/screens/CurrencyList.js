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

class CurrencyList extends Component {
    static porpTypes = {
        navigation: PropTypes.object,
        dispatch: PropTypes.func,
        baseCurrency: PropTypes.string,
        quoteCurrency: PropTypes.string
    };

    onSelectItem(value) {
        let { type } = this.props.navigation.state.params;
        if (type === 'base') {
            this.props.dispatch(selectMainCurrency(value))
        }

        if (type === 'quote') {
            this.props.dispatch(selectQuoteCurrency(value))
        }
        this.props.navigation.goBack(null);
    }

    render () {
        let currencyCompare = this.props.baseCurrency;
        if (this.props.navigation.state.params.type === 'quote') {
            currencyCompare = this.props.quoteCurrency;
        }
        
        return(
            <View style={{flex: 1}}>
                <StatusBar barStyle='default' translucent={false} />
                <FlatList
                    data={currencyList}
                    renderItem={({item}) => (
                        <ListItem
                            text={item}
                            selected={item === currencyCompare}
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

const mapStateToProps = (state) => ({
    baseCurrency: state.currencies.baseCurrency,
    quoteCurrency: state.currencies.quoteCurrency
});

export default connect(mapStateToProps)(CurrencyList);