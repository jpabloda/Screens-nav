import { createDrawerNavigator } from 'react-navigation-drawer'
import { createAppContainer } from 'react-navigation'
import AboutStack from './aboutHeader'
import HomeHeader from './homeHeader'

const RootDrawerNavigator = createDrawerNavigator({
    Home: {
        screen: HomeHeader,
    },
    About: {
        screen: AboutStack,
    }
})

export default createAppContainer(RootDrawerNavigator)