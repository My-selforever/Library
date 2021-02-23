import * as React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import Trans from './Screens/Transaction'
import Search from './Screens/Search'


export default class App extends React.Component{
 render(){
   return(
    <AppContainer/>
   )
 }
}

const Navtab = createBottomTabNavigator({
  Transaction: {screen:Trans},
  Search: {screen:Search}
},
{
  defaultNavigationOptions:({navigation})=>{
    tabBarIcon: ()=>{
     const root = navigation.state.routeName;
     if(root==="Transaction")
     {
      <Image source={require('./Images/assets/booklogo.jpg')} 
       style={{width:50,height:50}} ></Image>
     }
     else if(root === "Search"){
      <Image source={require('./Images/assets/book.png')} 
      style={{width:50,height:50}} ></Image>
     }
    }
  }
})
 
const AppContainer = createAppContainer(Navtab)



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
