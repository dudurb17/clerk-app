import {Stack} from "expo-router"

export default function StackPage(){
  return(
    <Stack 
    screenOptions={{
      headerStyle:{
        backgroundColor:'#121212'
      },
      headerTintColor:'#FFF'
    }}>
      <Stack.Screen name="home" 
      options={{headerTitle:'Home'}}/>
      <Stack.Screen name="profile" 
      options={{headerTitle:'Profile'}}/>
    </Stack> 
  )
}