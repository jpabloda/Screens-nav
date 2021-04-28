import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import Home from '../screens/Home'
import Image from '../screens/Photos'
import Header from '../shared/menu'
import React from 'react'

const screens = {
    Home: {
        screen: Home,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title={'Home'}/>,
            }
        }
    },
    Image: {
        screen: Image,
        navigationOptions: {
            title: 'Photo'
        }
    }
}

const HomeHeader = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: 'white',
        headerStyle: { backgroundColor: '#14196d', height: 120 },
    }
})

export default HomeHeader
