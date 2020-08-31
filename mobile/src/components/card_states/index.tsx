import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import CovidInterface from '../../Interfaces/CovidData'
import formatCurrency from '../../functions/formatCurrency'



const CardState = (props: CovidInterface) => {


    return (
        <View style={styles.container} key={props.id}>
            <Text style={[styles.title, { color: 'black', fontSize: 18 }]}>{props.title}</Text>
            <View style={styles.infoContainer}>

                <View style={styles.info}>
                    <Text style={[styles.titleBox, { color: '#fff' }]}>Mortes</Text>
                    <Text style={{ color: '#fff',fontFamily:'Inter_500Medium' }}>{formatCurrency(props.deaths)}</Text>
                </View>

                <View style={[styles.info, { backgroundColor: '#FFD600' }]}>
                    <Text style={[styles.titleBox, { color: 'black' }]}>Casos</Text>
                    <Text style={[{ color: 'black',fontFamily:'Inter_500Medium' }]}>{formatCurrency(props.cases)}</Text>
                </View>

            </View>
        </View>
    )
}

export default CardState

const styles = StyleSheet.create({
    container: {
        margin: 10,
        padding: 6,
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
        fontFamily: 'Inter_400Regular',
        fontWeight:'700'
    },

    info: {
        width: 150,
        height: 100,
        marginVertical: 10,
        backgroundColor: '#CE2727',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        padding: 30,
        marginHorizontal: 15,
        borderRadius: 5
    }
})