import React from 'react'
import { View, Picker, Text, StyleSheet, Image } from 'react-native'
import Constants from 'expo-constants'

const Home = () => {

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={{ width: 50, height: 50 }} source={require('../../assets/logo.png')} />
                <Text>Hi Mateus </Text>
                <View style={styles.calendarInfoHeader}>
                    <Text>Sao Paulo, Brasil</Text>
                    <Text style={{alignSelf:'flex-end'}}>21/08/2020</Text>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight + 15,
        backgroundColor: '#FAFAFA'
    },

    header: {
        justifyContent: 'space-between',
        padding: 30,
        flexDirection: 'row',
        backgroundColor: '#f3f'
    },

    calendarInfoHeader:{
        flexDirection:'column',
        justifyContent:'space-between'
    },

    titleHeader: {
        fontSize: 24,
        color: '#585858',
        fontFamily: 'Inter_500Medium'
    },
})

export default Home