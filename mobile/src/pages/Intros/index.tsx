import React, { useState, useRef, useEffect } from 'react'
import { View, Text, StyleSheet, Image, Animated, Easing } from 'react-native'
import AppIntroSlider from 'react-native-app-intro-slider';
import { Feather } from '@expo/vector-icons'
// import Login from '../Login';
import Home from '../Home';

const slides = [
    {
        key: 1,
        title: 'Covid Status',
        text: 'Covid status é um app feito para você acompanhar a situação da doneça no seu estado ou em outros lugares do mundo.',
        image: require('../../assets/world.png'),
        backgroundColor: '#59b2ab',
    },
    {
        key: 2,
        title: 'Covid Status',
        text: 'Mostraremos dicas de como você pode se cuidar e sugerir matérias sobre o assunto',
        image: require('../../assets/woman_medical.png'),
        backgroundColor: '#febe29',
    },
    {
        key: 3,
        title: 'Covid Status',
        text: 'Mas primeiro precisamos de algumas informações para seu uso no app',
        image: require('../../assets/social_distancing.png'),
        backgroundColor: '#22bcb5',
    }
]

const Intro = () => {
    const [showIntro, setShowIntro] = useState(false)
    const fadeAnim = useRef(new Animated.Value(0)).current
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


const styles = StyleSheet.create({
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FAFAFA',
        padding: 30
    },
    container: {
        flex: 1,
        backgroundColor: '#FAFAFA',

    },

    indicator: {
        backgroundColor: 'rgba(71, 153, 247, .9)'
    },

    slideHeader: {
        marginTop: 170
    },

    title: {
        fontFamily: 'Inter_500Medium',
        fontSize: 24,
        color: '#585858'
    },

    bodySlide: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },

    subtitle: {
        fontFamily: 'Inter_400Regular',
        fontSize: 18,
        color: '#585858',
        marginTop: 50
    },

    buttonCircle: {
        width: 40,
        height: 40,
        backgroundColor: '#4799F7',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
})


export default Intro