import { StatusBar } from 'expo-status-bar';
import React, { useContext } from 'react';
import { Appearance } from 'react-native';
import { AppLoading } from 'expo';
import { Inter_400Regular, Inter_500Medium, useFonts } from '@expo-google-fonts/inter'
import Stack from './src/routes/Stack'
import DarkContext, { DarkModeContext } from './src/services/context';

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
        <DarkModeContext >
          <Stack />

          <StatusBar style="auto" />
        </DarkModeContext>
      </>
    );
  }
}

