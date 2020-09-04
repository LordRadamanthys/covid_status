import React, { useState, useRef, useEffect, useContext } from 'react'
import { View, Text, StyleSheet, Image, Animated, Easing } from 'react-native'
import AppIntroSlider from 'react-native-app-intro-slider';
import { Feather } from '@expo/vector-icons'
import stylesWhite from './stylesWhite'
import stylesDark from './stylesDark'
// import Login from '../Login';
import Home from '../Home';
import DarkContext from '../../services/context';



const Intro = () => {
    const [showIntro, setShowIntro] = useState(false)
    const fadeAnim = useRef(new Animated.Value(0)).current
    const {setDark,darkmode} = useContext(DarkContext)
    const styles = darkmode ? stylesDark:stylesWhite 

    const slides = [
        {
            key: 1,
            title: 'Covid Status',
            text: 'Covid status é um app feito para você acompanhar a situação da doneça no seu estado ou em outros lugares do mundo.',
            image: darkmode ? require('../../assets/darkScreen1.png') : require('../../assets/world.png'),
            backgroundColor: '#59b2ab',
        },
        {
            key: 2,
            title: 'Covid Status',
            text: 'Mostraremos dicas de como você pode se cuidar e sugerir matérias sobre o assunto',
            image: darkmode ? require('../../assets/darkScreen2.png') : require('../../assets/woman_medical.png'),
            backgroundColor: '#febe29',
        },
        {
            key: 3,
            title: 'Covid Status',
            text: 'Mas primeiro precisamos de algumas informações para seu uso no app',
            image: darkmode ? require('../../assets/darkScreen3.png') : require('../../assets/social_distancing.png'),
            backgroundColor: '#22bcb5',
        }
    ]


    const fadeIn = () => {
        // Will change fadeAnim value to 1 in 5 seconds
        Animated.timing(fadeAnim, {
            toValue: 1,
            useNativeDriver: true,
            duration: 2500
        }).start();
    };

    const fadeOut = () => {
        // Will change fadeAnim value to 0 in 5 seconds
        Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 5000
        }).start();
    };

    useEffect(() => {
        fadeIn()
    }, [])

    const _renderItem = ({ item }) => {
        return (
            <View key={item.id as string} style={styles.slide}>
                <View style={styles.slideHeader}>
                    <Text style={styles.title}>{item.title}</Text>
                </View>
                <View style={styles.bodySlide}>
                    <Animated.View
                        style={
                            { opacity: fadeAnim } // Bind opacity to animated value
                        }

                    >
                        <Image style={{ height: 200, resizeMode: 'contain' }} source={item.image} />
                    </Animated.View>
                    <Text style={styles.subtitle}>{item.text}</Text>
                </View>
            </View>
        );
    }

    const _renderNextButton = () => {
        return (
            <View style={styles.buttonCircle}>
                <Feather name='arrow-right' size={20} color='#FAFAFA' />
            </View>
        )
    }

    const _renderDoneButton = () => {
        return (
            <View style={styles.buttonCircle}>
                <Text><Feather name='check' size={20} color='#FAFAFA' /></Text>
            </View>
        )
    }

    return (
        <>
            {!showIntro ?
                <View style={styles.container}>
                    <AppIntroSlider renderItem={_renderItem}
                        activeDotStyle={styles.indicator}
                        renderDoneButton={_renderDoneButton}
                        data={slides}
                        //onSlideChange={fadeIn}
                        onDone={() => setShowIntro(!showIntro)}
                        renderNextButton={_renderNextButton}
                    />
                </View>
                : <Home />
            }
        </>
    )
}




export default Intro