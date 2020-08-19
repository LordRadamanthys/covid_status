import React, { useState } from 'react'
import { View, Text, Image, TextInput, KeyboardAvoidingView, StyleSheet, Picker } from 'react-native'
import Constants from 'expo-constants'
import { Feather } from '@expo/vector-icons'
import { RectButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import statesBrazil from '../../services/StatesBrazil'


const Login = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [selectedPickerCity, setSelectedPickerCity] = useState('')
    const navigate = useNavigation()

    function goToHome() {
        navigate.navigate('Home', {uf:selectedPickerCity})
    }


    function getValuePickerCity(value: string) {
        setSelectedPickerCity(value)
        console.log(value)
    }

    return (
        <View style={styles.container}>
            <KeyboardAvoidingView behavior='position'>
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
                            value={name}
                            style={{ width: '80%' }}
                            placeholderTextColor={'rgba(88, 88, 88, 0.4)'}
                            placeholder="Type your name"
                            onChangeText={setName} />
                    </View>

                    <View style={styles.input}>
                        <Feather style={{ marginEnd: 10 }} name="mail" size={25} color="#4799F7" />
                        <TextInput
                            style={{ width: '80%' }}
                            placeholderTextColor={'rgba(88, 88, 88, 0.4)'}
                            placeholder="Type your email"
                            value={email}
                            onChangeText={setEmail} />
                    </View>


                    <View style={styles.input}>
                        <Feather style={{ marginEnd: 10 }} name="map-pin" size={25} color="#4799F7" />
                        <Picker

                            selectedValue={selectedPickerCity}
                            style={{ width: '90%' }}
                            onValueChange={(itemValue, itemIndex) => getValuePickerCity(itemValue)}
                        >
                            <Picker.Item label="Select your City" value="" color='rgba(88, 88, 88, 0.4)' />
                            {statesBrazil.map(state => {
                                return (
                                    <Picker.Item key={state.id_uf} label={state.nome} value={state.sigla} color='black' />
                                )
                            })}

                        </Picker>
                    </View>


                    <RectButton onPress={goToHome} style={styles.button}>
                        <Text style={styles.textButton}>Entrar</Text>
                    </RectButton>
                </View>
            </KeyboardAvoidingView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight + 15,
        backgroundColor: false ? '#1C1C1C' : '#FAFAFA'
    },

    header: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: 40,
        // backgroundColor: '#f3f'
    },

    titleHeader: {
        fontSize: 24,
        color: '#585858',
        fontFamily: 'Inter_500Medium'
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

    button: {
        marginTop: 40,
        paddingHorizontal: 60,
        paddingVertical: 20,
        backgroundColor: '#4799F7',
        borderRadius: 5
    },

    textButton: {
        color: '#fff',
        fontSize: 16
    }
})


export default Login