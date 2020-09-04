import React, { useContext } from 'react';
import { NavigationContainer, StackRouter } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Intro from '../pages/Intros'
import Home from '../pages/Home';
import { Appearance } from 'react-native';
import DarkContext from '../services/context';

const { Navigator, Screen } = createStackNavigator()

function Stack() {
    const { setDark } = useContext(DarkContext)
    const teste = Appearance.getColorScheme() === 'dark' ? true : false
    console.log(Appearance.getColorScheme());
    setDark(true)

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