import React,{useContext} from 'react'
import  {StyleSheet} from 'react-native'
import DarkContext from '../../services/context'
import Constants from 'expo-constants'

const stylesDark = StyleSheet.create({

    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight + 15,
        backgroundColor: '#232222' 
    },

    header: {
        justifyContent: 'space-between',
        padding: 30,
        flexDirection: 'row',
        backgroundColor: '#232222'
    },

    calendarInfoHeader: {
        flexDirection: 'column',
        justifyContent: 'space-between'
    },

    textHeader: {
        fontSize: 14,
        color: '#FFF',
        fontFamily: 'Inter_400Regular'
    },
})

export default stylesDark