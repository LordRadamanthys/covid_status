import React from 'react'
import { View, Text, Image, TextInput, StyleSheet } from 'react-native'
import Constants from 'expo-constants'
import { Feather } from '@expo/vector-icons'
import { RectButton } from 'react-native-gesture-handler'
const Login = () => {


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.titleHeader}>Covid Status</Text>
            </View>
            <View style={styles.imageContainer}>
                <Image style={{ width: 250, height: 200, resizeMode: 'contain' }} source={require('../../assets/login_image.png')} />
            </View>
            <View style={styles.form}>
                <View style={styles.input}>
                    <Feather style={{ marginEnd: 10 }} name="user" size={25} color="#4799F7" />
                    <TextInput

                        placeholderTextColor={'rgba(88, 88, 88, 0.4)'}
                        placeholder="Type your name"
                        value={''}
                        onChangeText={() => { }} />
                </View>

                <View style={styles.input}>
                    <Feather style={{ marginEnd: 10 }} name="mail" size={25} color="#4799F7" />
                    <TextInput

                        placeholderTextColor={'rgba(88, 88, 88, 0.4)'}
                        placeholder="Type your email"
                        value={''}
                        onChangeText={() => { }} />
                </View>

                <View style={styles.input}>
                    <Feather style={{ marginEnd: 10 }} name="map-pin" size={25} color="#4799F7" />
                    <TextInput

                        placeholderTextColor={'rgba(88, 88, 88, 0.4)'}
                        placeholder="Select your country"
                        value={''}
                        onChangeText={() => { }} />
                </View>

                <View style={styles.input}>
                    <Feather style={{ marginEnd: 10 }} name="map" size={25} color="#4799F7" />
                    <TextInput

                        placeholderTextColor={'rgba(88, 88, 88, 0.4)'}
                        placeholder="Select your city"
                        value={''}
                        onChangeText={() => { }} />
                </View>

                <RectButton style={styles.button}>
                    <Text style={styles.textButton}>Entrar</Text>
                </RectButton>
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
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: 40,
        // backgroundColor: '#f3f'
    },

    titleHeader:{
        fontSize:24,
        color:'#585858',
        fontFamily:'Inter_500Medium'
    },

    imageContainer: {
        alignItems: 'center',
        //  backgroundColor: 'black'
    },
    form: {
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },

    input: {
        flexDirection: 'row',
        height: 50,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: 'rgba(124, 119, 119, 0.15)',
        borderRadius: 5,
        marginBottom: 30,
        width: '80%',
        alignSelf: 'center',
        paddingHorizontal: 24,
        fontSize: 16,
    },

    button:{
        paddingHorizontal:60,
        paddingVertical:20,
        backgroundColor:'#4799F7',
        borderRadius:5
    },

    textButton:{
        color:'#fff',
        fontSize:16
    }
})


export default Login