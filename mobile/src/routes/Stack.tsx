import React from 'react';
import { NavigationContainer, StackRouter } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Intro from '../pages/Intros'
import Home from '../pages/Home';

const { Navigator, Screen } = createStackNavigator()

function Stack() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false }}>
                <Screen component={Intro} name='Intro' />
                <Screen component={Home} name='Home' />
            </Navigator>
        </NavigationContainer>
    )
}

export default Stack