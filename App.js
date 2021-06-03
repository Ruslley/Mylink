import React from 'react'
import "react-native-gesture-handler"
import{View, Text} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import Routes from  './src/routes'



export default function App(){
return(
  <NavigationContainer>
    <Routes />

  {/* <View style={{ marginStart: 15, flex: 1, justifyContent:'center', alignContent:'center', alignItems: 'center'}}>
    <Text style={{fontSize: 45, fontWeight: 'bold', textDecorationLine:'underline'}}>Hello World!</Text>
    <Text styl={{color: 'red'}}>Sujeito Programador</Text>
  </View> */}
   </NavigationContainer>
      

)
}