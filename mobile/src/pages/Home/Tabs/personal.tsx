import React, { useState, useEffect } from 'react'
import { View, Picker, Text, StyleSheet, Image, Dimensions } from 'react-native'
import Constants from 'expo-constants'
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
    const [dataPickerCountry, setDataPickerCountry] = useState(['teste', 'teste1'])
    const [selectedPickerCity, setSelectedPickerCity] = useState('')

    function getValuePickerCity(value: string) {
        setSelectedPickerCity(value)
    }



    // function fromartData(){
    //     {
    //         labels: ["January", "February", "March", "April", "May", "June"],
    //         datasets: [
    //             {
    //                 data: [
    //                     650,
    //                     600,
    //                     500,
    //                     400,
    //                     300,
    //                     700
    //                 ]
    //             }
    //         ]
    //     }
    // }
    async function getDataApi() {
        api.get('v1/brazil/uf/sp').then(response => {
            console.log(response.data)


        }).catch(erro => {
            console.log(erro)
        })
    }
    const data = {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
            {
                data: [20, 45, 28, 80, 99, 43]
            }
        ]
    };
    const chartConfig = {
        backgroundGradientFrom: "#4799F7",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#4799F7",
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(333, 25, 146, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false // optional
    };
    useEffect(() => {
        getDataApi()
    }, [])

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
            <View>
                <Text>Bezier Line Chart</Text>
                <BarChart
                    yAxisLabel="$"
                    yAxisSuffix="k"
                    style={{ borderRadius: 16 }}
                    data={data}
                    width={Dimensions.get("window").width}
                    height={220}
                    chartConfig={chartConfig}
                    verticalLabelRotation={30}
                />
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