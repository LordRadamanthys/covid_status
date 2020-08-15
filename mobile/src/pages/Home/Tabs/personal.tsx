import React, { useState } from 'react'
import { View, Picker, Text, StyleSheet, Image } from 'react-native'
import Constants from 'expo-constants'
import { Feather } from '@expo/vector-icons'





const TabPersonal = () => {
    const [dataPickerCountry, setDataPickerCountry] = useState(['teste', 'teste1'])
    const [selectedPickerCity, setSelectedPickerCity] = useState('')

    function getValuePickerCity(value: string) {
        setSelectedPickerCity(value)
    }
    return (
        <View style={styles.container}>
            <View style={styles.pickerSelectCityContainer}>
                <View style={styles.input}>
                    <Feather style={{ marginEnd: 10 }} name="map" size={25} color="#4799F7" />
                    <Picker

                        selectedValue={selectedPickerCity}
                        style={{ width: '90%' }}
                        onValueChange={(itemValue, itemIndex) => getValuePickerCity(itemValue)}
                    >
                        <Picker.Item label="Select another city" value="" color='rgba(88, 88, 88, 0.4)' />
                        <Picker.Item label="Java" value="java" color='black' />
                        <Picker.Item label="JavaScript" value="js" color='black' />
                    </Picker>
                </View>
            </View>

        </View>
    )
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#FAFAFA'
    },

    pickerSelectCityContainer: {
        justifyContent: 'space-between',
        padding: 10,
        flexDirection: 'row',
      //  backgroundColor: '#f3f'
    },

    calendarInfoHeader: {
        flexDirection: 'column',
        justifyContent: 'space-between'
    },

    titleHeader: {
        fontSize: 24,
        color: '#585858',
        fontFamily: 'Inter_500Medium'
    },
    input: {
        flexDirection: 'row',
        height: 50,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: 'rgba(124, 119, 119, 0.15)',
        borderRadius: 5,
        marginBottom: 30,
        // width: '80%',
        alignSelf: 'center',
        paddingHorizontal: 24,
        fontSize: 16,
    },
})

export default TabPersonal