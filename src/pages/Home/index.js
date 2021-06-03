import React from 'react';
import { Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import StatusBarPage from '../../components/StatusBarPage';


export default function Home() {
  return (
    <LinearGradient
      colors={['#1ddbb9', '#132742']}
      style={{ flex: 1, justifyContent: 'center' }}
    >
      <StatusBarPage 
      
      />

      <Text>Página Home</Text>
    </LinearGradient>
  );
}
