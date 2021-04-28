import { createStackNavigator } from 'react-navigation-stack'
import About from '../screens/About'
import Header from '../shared/menu'
import React from 'react'

const screens = {
    About: {
        screen: About,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title={'About'}/>
            }
        }
    }
}

const AboutHeader = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerStyle: { backgroundColor: '#14196d', height: 120 }
    }
})

export default AboutHeader
