import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import moment from 'moment';
import styles from './styles';

const SmallText = ({main, quote, date, conversionValue }) => (
    <Text style={styles.smallText}>
        1 {main} = {conversionValue} {quote} as of {moment(date).format('MMMM D, YYYY')}
    </Text>
);

SmallText.propTypes = {
    main: PropTypes.string,
    quote: PropTypes.string,
    date: PropTypes.object,
    conversionValue: PropTypes.number
};

export default SmallText;

