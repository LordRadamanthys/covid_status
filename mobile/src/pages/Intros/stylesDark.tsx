import React,{useContext} from 'react'
import  {StyleSheet} from 'react-native'

const stylesDark = StyleSheet.create({
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1C1C1C',
        padding: 30
    },
    container: {
        flex: 1,
        backgroundColor: '#FAFAFA',

    },

    indicator: {
        backgroundColor: 'rgba(71, 153, 247, .9)'
    },

    slideHeader: {
        marginTop: 170
    },

    title: {
        fontFamily: 'Inter_500Medium',
        fontSize: 24,
        color: '#585858'
    },

    bodySlide: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },

    subtitle: {
        fontFamily: 'Inter_400Regular',
        fontSize: 18,
        color: '#585858',
        marginTop: 50
    },

    buttonCircle: {
        width: 40,
        height: 40,
        backgroundColor: '#4799F7',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default stylesDark