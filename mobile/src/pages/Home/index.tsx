import React ,{useContext, useEffect}from 'react'
import { View, Picker, Text, StyleSheet, Image } from 'react-native'
import Constants from 'expo-constants'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import TabPersonal from './Tabs/Personal/personal';
import TabWorld from './Tabs/World/world';
import DarkContext from '../../services/context'
import styleWhite from './styles'
import stylesDark from './stylesDark'
const Home = () => {
    
    const {setDark,darkmode} = useContext(DarkContext)
    const styles = darkmode ? stylesDark:styleWhite 
    const Tab = createMaterialTopTabNavigator();
    

    useEffect(()=>{
        setDark(true)
        
    },[])
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={{ width: 50, height: 50 }} source={require('../../assets/logo.png')} />
                <View style={styles.calendarInfoHeader}>
                    <Text style={styles.textHeader}>Sao Paulo, Brasil</Text>
                    <Text style={[styles.textHeader, { alignSelf: 'flex-end' }]}>21/08/2020</Text>
                </View>
            </View>

            <Tab.Navigator tabBarOptions={{
                tabStyle: { borderRadius: 5 },
                labelStyle: { fontFamily: 'Inter_400Regular', fontSize: 19 },
                activeTintColor: '#FFF',
                inactiveTintColor: darkmode? '#585858' : '#fff',
                pressColor: '#4799F7',
                style: { backgroundColor: darkmode ?  '#232222' : '#F0F0F0', elevation: 9 },
                indicatorStyle: { height: '100%',  backgroundColor: '#4799F7', borderRadius: 5 },
            }}>
                <Tab.Screen name="Brasil" component={TabPersonal} />
                <Tab.Screen name="World" component={TabWorld} />
            </Tab.Navigator>
        </View>
    )
}




export default Home