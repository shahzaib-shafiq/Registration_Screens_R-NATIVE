import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import pattern from '../../assets/pattern.png'
import WelcomeLogo from '../../assets/welcomelogo.png'
const Login = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.patternbg} source={pattern}/>
    </View>
  )
}

export default Login


const styles = StyleSheet.create({
  container: {
      width: '100%',
      height: '100%',
      display: 'flex',
  },
  patternbg: {
      position: 'absolute',
      top: 0,
      width: '100%',
      height: '100%',
      zIndex: -1,
  },
  head: {
      fontSize: 30,
      color: '#fff',
  },
  container1: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      width: '100%',
  },
  logo: {
      height: '20%',
      resizeMode: 'contain',
      marginBottom: 50,
  }
})