import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'


const CardState = () => {


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sao Paulo</Text>
            <View style={styles.infoContainer}>

                <View style={styles.info}>
                    <Text style={styles.title}>Mortes</Text>
                    <Text style={styles.title}>3342234234</Text>
                </View>

                <View style={styles.info}>
                    <Text style={styles.title}>Casos</Text>
                    <Text style={styles.title}>234342</Text>
                </View>
                
            </View>
        </View>
    )
}

export default CardState

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        borderRadius: 10
    },

    infoContainer: {
        flexDirection: 'row'
    },

    title: {
        color: 'white'
    },

    info:{
        margin:20,
        backgroundColor:'red',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection:'column',
        padding: 20,
        marginHorizontal: 10,
        borderRadius: 5
    }
})