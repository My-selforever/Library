import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput, Image } from 'react-native';
import {BarCodeScanner} from 'expo-barcode-scanner'
import * as Permission from 'expo-permissions'

export default class Trans extends React.Component{
constructor(){
  super();
  this.state={
    cam : null,
    sdata : '',
    success:false,
    button: "Nor",
    bdata:''
  }
}
  start= async (type)=>
  {
   const {status}= await Permission.askAsync(Permission.CAMERA);
   this.setState({
     cam: (status==="granted")?true:false,
     button:type,
     success:false,
   })
   if(this.state.cam===false)
   {
     alert("Couldn't scan due to no Camera access.")
   }

  }

  
  datahandle = async({type,data})=>{
    this.setState({
      sdata: data,
      success:true,
      button:"Nor"
    })
  }
    render(){
 const cam = this.state.cam;
 const sdata = this.state.sdata;
 const success = this.state.success;
 const button = this.state.button;
 const bdata = this.state.bdata;
   if((button==="sbutton" ||  button==="bbutton") && cam===true){
    return(
      <BarCodeScanner onBarCodeScanned={(success===false)?this.datahandle:undefined}></BarCodeScanner>
    )
   }
if(button==="Nor"){
      return(
<View>
  <View style={style.head}>
  <Text>Do Transactions here. </Text>
  <Image source = {require('../Images/assets/searchingbook.png')}  
  style={{width:100,height:75}}></Image>
  </View>

        <View  style={{marginTop:200}}>
        <View >
      <TextInput placeholder="Student ID" value={sdata}  style={style.input}></TextInput> 
       <TouchableOpacity  onPress={()=>{this.start("sbutton")}}  style={style.button}> 
    <Text> Scan StudentID </Text>
  </TouchableOpacity>
   </View>

<View>
<TextInput placeholder="Book ID" value={bdata}  style={style.input}></TextInput> 
 <TouchableOpacity  onPress={()=>{this.start("bbutton")}}  style={style.button}> 
<Text> Scan BookID</Text>
</TouchableOpacity>
</View>
</View>
</View>
      )}
    }
   }


   const style = StyleSheet.create({
     button:{
       marginTop: 50,
       borderRadius:20,
       borderStyle: "solid",
       backgroundColor: '#ff0000',
       width: 150,
       height:50,
       alignItems:'center',
       justifyContent:"center",
       marginLeft:60
     },

     input:{
         borderStyle:'dotted',
         borderWidth:2,
         width:200,
         marginTop:100,
         marginLeft:50,
         

     },

    head:{
       marginTop:50,
       alignSelf: 'center'
          },

   })