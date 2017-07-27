import React from 'react';
import {
    Text,
    View,
    FlatList,
    StatusBar
} from 'react-native';

import currencyList from '../data/currencyList';

const CurrencyList = () => (
    <View style={{flex: 1}}>
        <StatusBar barStyle='default' translucent={false} />
        <FlatList
            data={currencyList}
            renderItem={({item}) => <Text>{item}</Text>}
            keyExtractor={(item) => item}
        />
    </View>
);

export default CurrencyList;