import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import Main from './pages/Main'
import Profile from './pages/Profile'

const Routes = createAppContainer(
    createStackNavigator({
        Main: {
            screen: Main,
            navigationOptions: {
                title: "Github Users"   
            }
        },
        Profile: {
            screen: Profile,
            navigationOptions: {
                title: "User info"
            }
        },
    }, {
        defaultNavigationOptions: {
            headerTintColor: '#FFF',
            headerStyle: {
                backgroundColor: "#3B5998"
            }
        }
    })
)

export default Routes