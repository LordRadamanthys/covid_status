import React, { useState, useEffect } from 'react'
import { View, Picker, Text, StyleSheet, Image, Dimensions, FlatList } from 'react-native'
import Constants from 'expo-constants'
import { useNavigation, useRoute } from '@react-navigation/native'
import statesBrazil from '../../../services/StatesBrazil'
import { Feather } from '@expo/vector-icons'
import { BarChart, Grid } from 'react-native-svg-charts'
import CovidInterface from '../../../Interfaces/CovidData'
// import {
//     LineChart,
//     BarChart,
//     PieChart,
//     ProgressChart,
//     ContributionGraph,
//     StackedBarChart
// } from "react-native-chart-kit";
import api from '../../../services/api';
import { ScrollView } from 'react-native-gesture-handler'
import CardState from '../../../components/card_states'
import formatCurrency from '../../../functions/formatCurrency'



const TabPersonal = () => {
    const route = useRoute()
    const [selectedPickerCity, setSelectedPickerCity] = useState('')
    const [statesDeaths, setStateDeaths] = useState(0)
    const [statesCases, setStateCases] = useState(0)

    const [dataStates, setDataStates] = useState<Array<CovidInterface>>()
    const [dataCountry, setDataCountry] = useState()
    const [dataCountryDeaths, setDataCountryDeaths] = useState()
    const [dataCountryCases, setDataCountryCases] = useState()
    const [dataCountryConfirmed, setDataCountryConfirmed] = useState()
    const [dataCountryRecovered, setDataCountryRecovered] = useState()

    function getValuePickerCity(value: string) {
        setSelectedPickerCity(value)
    }



    async function getAllStatusOfState() {
        api.get(`v1`).then(response => {

            setDataStates(response.data.data)
            //  console.log(response.data.data)
        }).catch(erro => {
            console.log(erro)
        })
    }


    function getFormatData() {
        const date = new Date()

        if (date.getMonth() > 9) {
            return `${date.getFullYear()}${date.getMonth()}${date.getDate()}`
        } else {
            return `${date.getFullYear()}0${date.getMonth()}${date.getDate()}`
        }
    }


    async function getStatusOfCountry(uf: string = 'brazil') {

        api.get(`v1/brazil`).then(response => {
            const formatDate = {
                labels: ["Mortes", "Casos", "Confirmados"],
                datasets: [
                    {
                        data: [response.data.data.deaths, response.data.data.cases, response.data.data.confirmed]
                    }
                ]
            };

            setDataCountryCases(response.data.data.cases)
            setDataCountryDeaths(response.data.data.deaths)
            setDataCountryConfirmed(response.data.data.confirmed)
            setDataCountryRecovered(response.data.data.recovered)
            //setDataCountry(formatDate)

        }).catch(erro => {
            console.log(erro)
        })
    }






  
    useEffect(() => {
        getStatusOfCountry()
        const value = !selectedPickerCity ? route.params : selectedPickerCity
        getAllStatusOfState()
        // getStatusOfStateToday()
    }, [selectedPickerCity])


    const renderItem = ({ item }) => {

        return <CardState title={item.state} deaths={222} cases={222} />
    }

    return (
        <View style={styles.container}>

            <View style={styles.containerStatus}>
                <Text style={[styles.title]}>Total Brasil</Text>
                <View style={styles.containerDataStatus}>
                    <View style={[styles.status, { backgroundColor: '#CE2727' }]}>
                        <Text style={{ color: '#fff', fontFamily: 'Inter_500Medium' }}>{`${formatCurrency((Number(dataCountryDeaths)))}`}</Text>
                        <Text style={{ color: '#fff', fontFamily: 'Inter_400Regular' }}>Mortes</Text>
                    </View>

                    <View style={[styles.status, { backgroundColor: '#FFD600' }]}>
                        <Text style={{ color: 'black', fontFamily: 'Inter_500Medium' }}>{`${formatCurrency((Number(dataCountryConfirmed)))}`}</Text>
                        <Text style={{ color: 'black', fontFamily: 'Inter_400Regular' }}>Casos</Text>
                    </View>

                </View>
            </View>

            {/* <View style={styles.pickerSelectCityContainer}>
                <View style={styles.selectInput}>
                    <Feather style={{ marginEnd: 10 }} name="map" size={25} color="#4799F7" />
                    <Picker

                        selectedValue={selectedPickerCity}
                        style={{ width: '90%' }}
                        onValueChange={(itemValue, itemIndex) => getValuePickerCity(itemValue)}
                    >
                        <Picker.Item label="Select another city" value={route.params} color='rgba(88, 88, 88, 0.4)' />
                        {statesBrazil.map(state => {
                            return (
                                <Picker.Item key={state.id_uf} label={state.nome} value={state.sigla} color='black' />
                            )
                        })}
                    </Picker>
                </View>

            </View> */}
            <View>
                <FlatList
                    data={dataStates}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </View>
            {/* <CardState /> */}
        </View >
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: false ? '#1C1C1C' : '#FAFAFA'
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

    selectInput: {
        flexDirection: 'row',
        height: 50,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: 'rgba(124, 119, 119, 0.15)',
        borderRadius: 5,
        // width: '80%',
        alignSelf: 'center',
        paddingHorizontal: 24,
        fontSize: 16,
    },

    containerStatus: {
        marginTop: 10,
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        //  backgroundColor: '#F0F0F0'

    },

    containerDataStatus: {
        flexDirection: 'row',
        padding: 10,
        paddingRight: 90,
        justifyContent: 'center',
        // backgroundColor: 'black'

    },

    status: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        marginHorizontal: 10,
        borderRadius: 5
        // backgroundColor: 'red'
    },

    title: {

        fontFamily: 'Inter_500Medium',
        fontSize: 21,
        color: false ? '#fff' : '#585858',
    },
})

export default TabPersonal