import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { AppLoading } from 'expo';
import { Inter_400Regular, Inter_500Medium, useFonts } from '@expo-google-fonts/inter'
import Stack from './src/routes/Stack'
import {DarkModeContext} from './src/services/context';

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

