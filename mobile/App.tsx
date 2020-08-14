import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { AppLoading } from 'expo';
import { Inter_400Regular, Inter_500Medium, useFonts } from '@expo-google-fonts/inter'
import Stack from './src/routes/Stack'

export default function App() {

  let [fontsLoaded] = useFonts({
    Inter_500Medium,
    Inter_400Regular

  })



  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <>
        <Stack />
        <StatusBar style="auto" />
      </>
    );
  }
}

