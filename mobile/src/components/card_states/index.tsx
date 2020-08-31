import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import CovidInterface from '../../Interfaces/CovidData'



const CardState = (props: CovidInterface) => {


    return (
        <View style={styles.container}>
            <Text style={[styles.title, { color: 'black', fontSize: 18 }]}>Sao Paulo</Text>
            <View style={styles.infoContainer}>

                <View style={styles.info}>
                    <Text style={[styles.titleBox, { color: '#fff' }]}>Mortes</Text>
                    <Text style={{ color: '#fff' }}>3342234234</Text>
                </View>

                <View style={[styles.info, { backgroundColor: '#FFD600' }]}>
                    <Text style={[styles.titleBox, { color: 'black' }]}>Casos</Text>
                    <Text style={[{ color: 'black' }]}>234342</Text>
                </View>

            </View>
        </View>
    )
}

export default CardState

const styles = StyleSheet.create({
    container: {
        margin: 10,
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(160, 160, 160, 0.09)',
        borderRadius: 5,


    },

    infoContainer: {
        flexDirection: 'row',

    },

    title: {
        color: 'black',
        fontSize: 18,
        fontFamily: 'Inter_500Medium'
    },

    titleBox: {
        fontFamily: 'Inter_400Regular'
    },

    info: {
        width: 150,
        height: 100,
        margin: 20,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        padding: 30,
        marginHorizontal: 10,
        borderRadius: 5
    }
})