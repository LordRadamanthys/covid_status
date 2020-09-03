import React,{useContext} from 'react'
import  {StyleSheet} from 'react-native'
import DarkContext from '../../services/context'
import Constants from 'expo-constants'

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

export default styles