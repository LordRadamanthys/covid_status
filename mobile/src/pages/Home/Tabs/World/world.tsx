import React, { useState, useEffect, useContext } from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import { Feather } from '@expo/vector-icons'
import CardState from '../../../../components/card_states'
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder'
import api from '../../../../services/api'
import DarkContext from '../../../../services/context'
import stylesWhite from '../Personal/stylesWhite'
import stylesDark from '../Personal/stylesDark'


const TabWorld = () => {
    const [dataWorld, setDataWorld] = useState()
    const {setDark,darkmode} = useContext(DarkContext)
    const styles = darkmode ? stylesDark:stylesWhite 
    async function getAllDataWorld() {
        setDataWorld(undefined)
        api.get(`v1/countries`).then(response => {

            setDataWorld(response.data.data)
        }).catch(erro => {
            console.log(erro)
        })
    }
    const renderItem = ({ item }) => {

        return <CardState id={item.id} title={item.country} deaths={item.deaths} cases={item.cases} />
    }

    useEffect(() => {
        getAllDataWorld()

    }, [])
    return (
        <View style={styles.container}>

            {!dataWorld ? <ShimmerPlaceHolder autoRun={true} visible={false} style={{ width: '100%', height: 150, borderRadius: 5, }} />

                :
                <View style={{ flex: 1, marginBottom: 0 }}>
                    <FlatList
                        onRefresh={getAllDataWorld}
                        refreshing={false}
                        data={dataWorld}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />
                </View>}
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

export default TabWorld