import React, { useState, useEffect } from 'react'
import { View, Picker, Text, StyleSheet, Image, Dimensions } from 'react-native'
import Constants from 'expo-constants'
import { useNavigation, useRoute } from '@react-navigation/native'
import statesBrazil from '../../../services/StatesBrazil'
import { Feather } from '@expo/vector-icons'
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from "react-native-chart-kit";
import api from '../../../services/api';



const TabPersonal = () => {
    const route = useRoute()
    const [dataPickerCountry, setDataPickerCountry] = useState(['teste', 'teste1'])
    const [selectedPickerCity, setSelectedPickerCity] = useState('')

    const [statesDeaths, setStateDeaths] = useState(0)
    const [statesCases, setStateCases] = useState(0)
    const [dataStates, setDataStates] = useState()
    function getValuePickerCity(value: string) {
        setSelectedPickerCity(value)
    }

    async function getAllStatusOfState(state: string = 'sp') {
        api.get(`v1/brazil/uf/${state}`).then(response => {

            setStateDeaths(response.data.deaths)
            setStateCases(response.data.cases)
            getStatusOfStateToday(response.data.uf)
        }).catch(erro => {
            console.log(erro)
        })
    }


    function getFormatData() {
        const date = new Date()
        if(date.getMonth()>9){
            return `${date.getFullYear()}${date.getMonth()}${date.getDate()}`
        }else{
            return `${date.getFullYear()}0${date.getMonth()}${date.getDate()}`
        }
    }


    async function getStatusOfStateToday(uf: string) {

        api.get(`v1/brazil/${getFormatData()}`).then(response => {

            const data = response.data.data.filter((data) => {
                if (data.uf === uf) {
                    return data
                }
            })

            const formatDate = {
                labels: ["Mortes", "Casos", "Suspeitos"],
                datasets: [
                    {
                        data: [data[0].deaths, (data[0].cases), data[0].suspects]
                    }
                ]
            };

            setDataStates(formatDate)

        }).catch(erro => {
            console.log(erro)
        })
    }


    const dataInit = {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
            {
                data: [20, 45, 28, 80, 99, 43]

            },

        ]
    };


    const chartConfig = {
        backgroundGradientFrom: "#5799F9",
        // backgroundGradientFromOpacity: 1,
        backgroundGradientTo: "#5799F9",
        //  backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(255, 255, 255)`,
        strokeWidth: 3, // optional, default 3
        barPercentage: 1.5,

        useShadowColorFromDataset: false // optional
    };


    useEffect(() => {
        const value = !selectedPickerCity ? route.params : selectedPickerCity
        getAllStatusOfState(value)
        // getStatusOfStateToday()
    }, [selectedPickerCity])

    return (
        <View style={styles.container}>
            <View style={styles.pickerSelectCityContainer}>
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

            </View>

            <View style={styles.containerStatus}>
                <Text style={styles.title}>Total</Text>
                <View style={styles.containerDataStatus}>
                    <View style={[styles.status, { backgroundColor: '#CE2727' }]}>
                        <Text style={{ color: '#fff' }}>{`${statesDeaths} mortes`}</Text>
                    </View>

                    <View style={[styles.status, { backgroundColor: '#FFD600' }]}>
                        <Text style={{ color: 'black' }}>{`${statesCases} casos`}</Text>
                    </View>


                </View>

            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center', marginHorizontal: 60 }}>
                <Text style={[styles.title, { marginVertical: 15 }]}>Hoje</Text>
                <BarChart
                    yAxisLabel=""
                    yAxisSuffix=""
                    withHorizontalLabels={false}
                    withInnerLines={true}
                    showValuesOnTopOfBars={true}
                    style={{ borderRadius: 10 }}
                    fromZero={true}
                    data={!dataStates ? dataInit : dataStates}
                    width={Dimensions.get("window").width - 20}
                    height={280}
                    chartConfig={chartConfig}
                    verticalLabelRotation={0}
                />



            </View>
        </View>
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
        flexDirection: 'row',
        marginLeft: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F0F0F0'

    },

    containerDataStatus: {
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'center',
        // backgroundColor: 'black'

    },

    status: {
        paddingVertical: 20,
        paddingHorizontal: 10,
        marginHorizontal: 10,
        borderRadius: 5
        // backgroundColor: 'red'
    },

    title: {
        fontFamily: 'Inter_500Medium',
        fontSize: 22,
        color:  false ? '#fff' : '#585858',
    },
})

export default TabPersonal