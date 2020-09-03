import React, { useState, useEffect, useContext } from 'react'
import { View, Picker, Text, StyleSheet, Image, Dimensions, FlatList } from 'react-native'
import { useRoute } from '@react-navigation/native'

import { Feather } from '@expo/vector-icons'

import CovidInterface from '../../../../Interfaces/CovidData'

import api from '../../../../services/api';
import CardState from '../../../../components/card_states'
import formatCurrency from '../../../../functions/formatCurrency'
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder'
import stylesWhite from './stylesWhite'
import stylesDark from './stylesDark'
import DarkContext from '../../../../services/context'



const TabPersonal = () => {
    const {setDark,darkmode} = useContext(DarkContext)
    const styles = darkmode ? stylesDark:stylesWhite 
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




    async function getAllStatusOfState() {
        setDataStates(undefined)
        api.get(`v1`).then(response => {
            
            if(response.data.data[0] === undefined) throw ('ops, ocorreu algo de errado')
            
            setDataStates(response.data.data)
        }).catch(erro => {
            alert(erro)
            setDataStates([])
            //getAllStatusOfState()
        })
    }



    async function getStatusOfCountry(uf: string = 'brazil') {
        setDataCountryDeaths(undefined)
        api.get(`v1/brazil`).then(response => {

            setDataCountryCases(response.data.data.cases)
            setDataCountryDeaths(response.data.data.deaths)
            setDataCountryConfirmed(response.data.data.confirmed)
            setDataCountryRecovered(response.data.data.recovered)

        }).catch(erro => {
            console.log(erro)
        })
    }


    useEffect(() => {
        getStatusOfCountry()
        getAllStatusOfState()
    }, [selectedPickerCity])


    const renderItem = ({ item }) => {

        return <CardState id={item.id} title={item.state} deaths={item.deaths} cases={item.cases} uf={item.uf}/>
    }

    return (
        <View style={styles.container}>

            <View style={styles.containerStatus}>
                <Text style={styles.title}>Total Brasil</Text>
                <View style={styles.containerDataStatus}>
                    {!dataCountryDeaths ? <>
                        <ShimmerPlaceHolder style={{ width: 90, height: 90, borderRadius: 5, marginHorizontal: 20 }} autoRun={true} visible={false} />
                        <ShimmerPlaceHolder style={{ width: 90, height: 90, borderRadius: 5 }} autoRun={true} visible={false} /></>
                        : <>
                            <View style={[styles.status, { backgroundColor: '#CE2727' }]}>
                                <Text style={{ color: '#fff', fontFamily: 'Inter_400Regular', fontWeight: '700' }}>Mortes</Text>
                                <Text style={{ color: '#fff', fontFamily: 'Inter_500Medium' }}>{`${formatCurrency((Number(dataCountryDeaths)))}`}</Text>
                            </View>

                            <View style={[styles.status, { backgroundColor: '#FFD600' }]}>
                                <Text style={{ color: 'black', fontFamily: 'Inter_400Regular', fontWeight: '700' }}>Casos</Text>
                                <Text style={{ color: 'black', fontFamily: 'Inter_500Medium' }}>{`${formatCurrency((Number(dataCountryConfirmed)))}`}</Text>
                            </View>
                        </>
                    }

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
            {!dataStates ? <ShimmerPlaceHolder autoRun={true} visible={false} style={{ width: '100%', height: 150, borderRadius: 5, }}>
                <CardState title='' id={0} cases={0} deaths={0} />
            </ShimmerPlaceHolder>
                :
                <View style={{ flex: 1, marginBottom: 0 }}>
                    <FlatList
                        data={dataStates}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                        onRefresh={() => {
                            getAllStatusOfState()
                            getStatusOfCountry()
                        }}
                        refreshing={false}
                    />
                </View>}
        </View >
    )
}

export default TabPersonal