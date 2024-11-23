import { View, Text, StyleSheet } from 'react-native'
import React from 'react'


export default function Login() {
  return (
    <View>
      <Text>Login</Text>
    </View>
  )
}

const styles= StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    padding:20
  },
  title:{
    textAlign:'center',
    fontWeight:'bold',
    fontSize:28,
    marginBottom:14
  },
  input:{
    marginVertical:4,
    height:50,
    borderWidth:1,
    borderColor:'#121212',
    borderRadius:8,
    padding:10,
    backgroundColor:'#fff'
  },
  button:{
    margin:8,
    alignItems:'center'
  }
})