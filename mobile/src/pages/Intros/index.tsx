import React, { useState } from 'react'
import { View, Text, StyleSheet, Image} from 'react-native'
import AppIntroSlider from 'react-native-app-intro-slider';

    
    const slides = [
        {
            key: 1,
            title: 'Title 1',
            text: 'Description.\n/Say something cool',
            image: require('../../assets/landing.png'),
            backgroundColor: '#59b2ab',
        },
        {
            key: 2,
            title: 'Title 2',
            text: 'Other cool stuff',
            image: require('../../assets/landing.png'),
            backgroundColor: '#febe29',
        },
        {
            key: 3,
            title: 'Rocket guy',
            text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
            image: require('../../assets/landing.png'),
            backgroundColor: '#22bcb5',
        }
    ]

    const Intro = () => {
        const [showIntro, setShowIntro] = useState(false)
        
        const _renderItem = ({item}) => {
            return (
                <View key={item.id} >
                    <Text>{item.title}</Text>
                    <Image source={item.image} />
                    <Text >{item.text}</Text>
                </View>
            );
        }
        const _onDone = () => {
            // User finished the introduction. Show real app through
            // navigation or simply by controlling state
            setShowIntro(true)
        }
        return (
            <AppIntroSlider renderItem={_renderItem} data={slides} onDone={_onDone} />
        )
    }


const styles = StyleSheet.create({
    container:{
        

    }
})


export default Intro