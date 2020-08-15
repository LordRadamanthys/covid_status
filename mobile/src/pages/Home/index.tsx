import React from 'react'
import { View, Picker, Text, StyleSheet, Image } from 'react-native'
import Constants from 'expo-constants'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import TabPersonal from './Tabs/personal';
import TabWorld from './Tabs/world';

const Home = () => {
    const Tab = createMaterialTopTabNavigator();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={{ width: 50, height: 50 }} source={require('../../assets/logo.png')} />
                <Text style={[styles.textHeader, { alignSelf: 'center', marginLeft: 20 }]}>Hi Mateus </Text>
                <View style={styles.calendarInfoHeader}>
                    <Text style={styles.textHeader}>Sao Paulo, Brasil</Text>
                    <Text style={[styles.textHeader, { alignSelf: 'flex-end' }]}>21/08/2020</Text>
                </View>
            </View>

            <Tab.Navigator tabBarOptions={{
                tabStyle: { borderRadius: 5 },
                labelStyle: { fontFamily: 'Inter_400Regular', fontSize: 19 },
                activeTintColor: '#FFF',
                inactiveTintColor: '#585858',
                pressColor: '#4799F7',
                style: { backgroundColor: '#F0F0F0', elevation: 9 },
                indicatorStyle: { height: '100%',  backgroundColor: '#4799F7', borderRadius: 5 },
            }}>
                <Tab.Screen name="Brasil" component={TabPersonal} />
                <Tab.Screen name="World" component={TabWorld} />
            </Tab.Navigator>
        </View>
    )
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight + 15,
        backgroundColor: '#F0F0F0'
    },

    header: {
        justifyContent: 'space-between',
        padding: 30,
        flexDirection: 'row',
        backgroundColor: '#F0F0F0'
    },

    calendarInfoHeader: {
        flexDirection: 'column',
        justifyContent: 'space-between'
    },

    textHeader: {
        fontSize: 14,
        color: '#585858',
        fontFamily: 'Inter_400Regular'
    },
})

export default Home