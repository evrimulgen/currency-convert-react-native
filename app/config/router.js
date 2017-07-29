import { StackNavigator } from 'react-navigation';
import { StatusBar } from 'react-native';

import Home from '../screens/Home';
import CurrencyList from '../screens/CurrencyList';
import Options from '../screens/Options';
import Themes from '../screens/Themes';

const OptionsStack = StackNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: {
                header: () => null
            }
        },
        Options: {
            screen: Options,
            navigationOptions: ({ navigation }) => ({
                headerTitle: 'Options'
            })
        },
        Themes: {
            screen: Themes,
            navigationOptions: ({ navigation }) => ({
                headerTitle: 'Themes'
            })
        }
    },
    {
        headerMode: 'screen'
    }
);

const CurrencyStack = StackNavigator(
    {
        CurrencyList: {
            screen: CurrencyList,
            navigationOptions: ({ navigation }) => ({
                headerTitle: navigation.state.params.title
            })
        },
    },
    {
        mode: 'modal'
    }
);

export default StackNavigator(
    {
        Home: {
            screen: OptionsStack
        },
        CurrencyList: {
            screen: CurrencyStack
        },
    },
    {
        mode: 'modal',
        cardStyle: {paddingTop: StatusBar.currentHeight},
        headerMode: 'none'
    }
)