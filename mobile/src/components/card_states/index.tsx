import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'


const CardState = () => {


    return (
        <View style={styles.container}>
            <Text style={[styles.title, { color: 'black' }]}>Sao Paulo</Text>
            <View style={styles.infoContainer}>

                <View style={styles.info}>
                    <Text style={styles.title}>Mortes</Text>
                    <Text style={styles.title}>3342234234</Text>
                </View>

                <View style={[styles.info, { backgroundColor: '#FFD600' }]}>
                    <Text style={[styles.title, { color: 'black' }]}>Casos</Text>
                    <Text style={[styles.title, { color: 'black' }]}>234342</Text>
                </View>

            </View>
        </View>
    )
}

export default CardState

const styles = StyleSheet.create({
    container: {
        margin: 20,
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(160, 160, 160, 0.15)',
        borderRadius: 5
    },

    infoContainer: {
        flexDirection: 'row'
    },

    title: {
        color: 'white'
    },

    info: {
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