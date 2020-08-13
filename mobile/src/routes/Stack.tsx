import React from 'react';
import { NavigationContainer, StackRouter } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Intro from '../pages/Intros'

const { Navigator, Screen } = createStackNavigator()

function Stack() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false }}>
                <Screen component={Intro} name='Intro' />
            </Navigator>
        </NavigationContainer>
    )
}

export default Stack