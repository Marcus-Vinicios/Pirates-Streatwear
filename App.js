import React from 'react'
import 'react-native-reanimated'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Navigation from './src/components/Navigation'

export default function App(){
  return (
    <SafeAreaProvider>
      <Navigation />
    </SafeAreaProvider>
  )
}
