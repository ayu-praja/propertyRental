import React, { Component, useState } from "react";
import {Alert, View, StyleSheet,Text,TouchableOpacity,Dimensions } from "react-native";
import AsyncStorage from '@react-native-community/async-storage'
import { connect } from 'react-redux';
import PropertyType from "../PropertyType/PropertyType";
const width=Dimensions.get('window').width;

class PropertyList extends Component {

  constructor(props){
    super(props);
    
    this.state={
      property1:0,
      property2:0,
      property3:0,
      property4:0,
      property5:0,
      property6:0,
      property7:0,
      property7:0,
      property8:0,
      property9:0,
      property10:0,
      showRender:false,
      showPropertyType:false
    }
  }

  func1=async () =>{
    try{
    const value = await AsyncStorage.getItem('property1');
 
    if (value !== null) {
      // We have data!!
      console.log(value);
      return value;
    }
    
    else{
     await AsyncStorage.setItem('property1','0');
     return 0;
    }
  }
    catch(error){
      console.log(error)
    }
    
  }

  func2=async () =>{
    try{
    const value = await AsyncStorage.getItem('property2');
 
    if (value !== null) {
      // We have data!!
      console.log(value);
      return value;
    }
    
    else{
     await AsyncStorage.setItem('property2','0');
     return 0;
    }
  }
    catch(error){
      console.log(error)
    }
    
  }
  func3=async () =>{
    try{
    const value = await AsyncStorage.getItem('property3');
 
    if (value !== null) {
      // We have data!!
      console.log(value);
      return value;
    }
    
    else{
     await AsyncStorage.setItem('property3','0');
     return 0;
    }
  }
    catch(error){
      console.log(error)
    }
    
  }


  func4=async () =>{
    try{
    const value = await AsyncStorage.getItem('property4');
 
    if (value !== null) {
      // We have data!!
      console.log(value);
      return value;
    }
    
    else{
     await AsyncStorage.setItem('property4','0');
     return 0;
    }
  }
    catch(error){
      console.log(error)
    }
    
  }

  func5=async () =>{
    try{
    const value = await AsyncStorage.getItem('property5');
 
    if (value !== null) {
      // We have data!!
      console.log(value);
      return value;
    }
    
    else{
     await AsyncStorage.setItem('property5','0');
     return 0;
    }
  }
    catch(error){
      console.log(error)
    }
    
  }
  

  func6=async () =>{
    try{
    const value = await AsyncStorage.getItem('property6');
 
    if (value !== null) {
      // We have data!!
      console.log(value);
      return value;
    }
    
    else{
     await AsyncStorage.setItem('property6','0');
     return 0;
    }
  }
    catch(error){
      console.log(error)
    }
    
  }


  func7=async () =>{
    try{
    const value = await AsyncStorage.getItem('property7');
 
    if (value !== null) {
      // We have data!!
      console.log(value);
      return value;
    }
    
    else{
     await AsyncStorage.setItem('property7','0');
     return 0;
    }
  }
    catch(error){
      console.log(error)
    }
    
  }


  func8=async () =>{
    try{
    const value = await AsyncStorage.getItem('property8');
 
    if (value !== null) {
      // We have data!!
      console.log(value);
      return value;
    }
    
    else{
     await AsyncStorage.setItem('property8','0');
     return 0;
    }
  }
    catch(error){
      console.log(error)
    }
    
  }

  func9=async () =>{
    try{
    const value = await AsyncStorage.getItem('property9');
 
    if (value !== null) {
      // We have data!!
      console.log(value);
      return value;
    }
    
    else{
     await AsyncStorage.setItem('property9','0');
     return 0;
    }
  }
    catch(error){
      console.log(error)
    }
    
  }

  func10=async () =>{
    try{
    const value = await AsyncStorage.getItem('property10');
 
    if (value !== null) {
      // We have data!!
      console.log(value);
      return value;
    }
    
    else{
     await AsyncStorage.setItem('property10','0');
     return 0;
    }
  }
    catch(error){
      console.log(error)
    }
    
  }
  
  

  clearAllData=async()=> {
    AsyncStorage.getAllKeys()
        .then(keys => AsyncStorage.multiRemove(keys))
        .then(() => console.log('success'));
        
        
  }

    componentDidMount=async()=>{
    //this.clearAllData();
     const property1=await this.func1();
     const property2=await this.func2();
     const property3=await this.func3();
     const property4=await this.func4();
     const property5=await this.func5();
     const property6=await this.func6();
     const property7=await this.func7();
     const property8=await this.func8();
     const property9=await this.func9();
     const property10=await this.func10();
   
      this.setState({
        property1:property1,
        property2:property2,
        property3:property3,
        property4:property4,
        property5:property5,
        property6:property6,
        property7:property7,
        property8:property8,
        property9:property9,
        property10:property10,
        propertybhk1: await AsyncStorage.getItem('propertyTypebhk1')!=null?await AsyncStorage.getItem('propertyTypebhk1')+'-BHK' :'property 1',
        propertybhk2: await AsyncStorage.getItem('propertyTypebhk2')!=null?await AsyncStorage.getItem('propertyTypebhk2')+'-BHK' :'property 2',
        propertybhk3: await AsyncStorage.getItem('propertyTypebhk3')!=null?await AsyncStorage.getItem('propertyTypebhk3')+'-BHK'  :'property 3',
        propertybhk4: await AsyncStorage.getItem('propertyTypebhk4')!=null?await AsyncStorage.getItem('propertyTypebhk4')+'-BHK'  :'property 4',
        propertybhk5: await AsyncStorage.getItem('propertyTypebhk5')!=null?await AsyncStorage.getItem('propertyTypebhk5')+'-BHK'  :'property 5',
        propertybhk6: await AsyncStorage.getItem('propertyTypebhk6')!=null?await AsyncStorage.getItem('propertyTypebhk6')+'-BHK'  :'property 6',
        propertybhk7: await AsyncStorage.getItem('propertyTypebhk7')!=null?await AsyncStorage.getItem('propertyTypebhk7')+'-BHK'  :'property 7',
        propertybhk8: await AsyncStorage.getItem('propertyTypebhk8')!=null?await AsyncStorage.getItem('propertyTypebhk8')+'-BHK'  :'property 8',
        propertybhk9: await AsyncStorage.getItem('propertyTypebhk9')!=null?await AsyncStorage.getItem('propertyTypebhk9')+'-BHK'  :'property 9',
        propertybhk10: await AsyncStorage.getItem('propertyTypebhk10')!=null?await AsyncStorage.getItem('propertyTypebhk10')+'-BHK'  :'property 10',
        showRender:true,
      showPropertyType:false
      })
        

    }
    render(){
      var stepsCompleted;
      var propertyListedNumber;
      deleteAll=async()=> {
        AsyncStorage.getAllKeys()
            .then(keys => AsyncStorage.multiRemove(keys))
            .then(() => console.log('success'));
            
            
      }
      const onPressOne = () => {
        this.stepsCompleted=this.state.property1;
        this.propertyListedNumber=1
        this.setState({
          showRender:false,
      showPropertyType:true

        })
      }

      const onPressTwo = () => {
        this.stepsCompleted=this.state.property2;
        this.propertyListedNumber=2
        this.setState({
          showRender:false,
      showPropertyType:true

        })
      }

      const onPressThree = () => {
        this.stepsCompleted=this.state.property3;
        this.propertyListedNumber=3
        this.setState({
          showRender:false,
      showPropertyType:true

        })
      }

      const onPressFour = () => {
        this.stepsCompleted=this.state.property4;
        this.propertyListedNumber=4
        this.setState({
          showRender:false,
      showPropertyType:true

        })
      }

      const onPressFive = () => {
        this.stepsCompleted=this.state.property5;
        this.propertyListedNumber=5
        this.setState({
          showRender:false,
      showPropertyType:true

        })
      }

        const onPressSix = () => {
          this.stepsCompleted=this.state.property6;
          this.propertyListedNumber=6
          this.setState({
            showRender:false,
        showPropertyType:true
  
          })
        }

          const onPressSeven = () => {
            this.stepsCompleted=this.state.property7;
            this.propertyListedNumber=7
            this.setState({
              showRender:false,
          showPropertyType:true
    
            })
          } 

            const onPressEight = () => {
              this.stepsCompleted=this.state.property8;
              this.propertyListedNumber=8
              this.setState({
                showRender:false,
            showPropertyType:true
      
              }) 
            }

              const onPressNine = () => {
                this.stepsCompleted=this.state.property9;
                this.propertyListedNumber=9
                this.setState({
                  showRender:false,
              showPropertyType:true
        
                }) 

              }
                
                const onPressTen = () => {
                  this.stepsCompleted=this.state.property10;
                  this.propertyListedNumber=10
                  this.setState({
                    showRender:false,
                showPropertyType:true
          
                  }) 
                }
      
      return (
        this.state.showRender?  <View
             style={{
                        flex: 1,
                        flexDirection: 'column',
                        backgroundColor: 'white',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
          >
                 <TouchableOpacity
                 
                 onPress={onPressOne}
                style={{

                  backgroundColor:'#0080ff',
                  height:50,
                  width:width-60,
                  alignItems:'center',
                  justifyContent:'center'
                }}
               
            >
        <Text style={{color:'#ffffff',
        fontWeight:'bold'}}> {this.state.propertybhk1}  {this.state.property1}/5   </Text>
      </TouchableOpacity>

      <TouchableOpacity
                onPress={onPressTwo}
                style={{
                  backgroundColor:'#0080ff',
                  marginTop:4,
                  height:50,
                  width:width-60,
                  alignItems:'center',
                  justifyContent:'center'
                }}
               
            >
        <Text style={{color:'#ffffff',
        fontWeight:'bold'}}>{this.state.propertybhk2}  {this.state.property2}/5</Text>
      </TouchableOpacity>

      <TouchableOpacity
                onPress={onPressThree}
                style={{
                  backgroundColor:'#0080ff',
                  marginTop:4,
                  height:50,
                  width:width-60,
                  alignItems:'center',
                  justifyContent:'center'
                }}
               
            >
        <Text style={{color:'#ffffff',
        fontWeight:'bold'}}>{this.state.propertybhk3}  {this.state.property3}/5</Text>
      </TouchableOpacity>

      <TouchableOpacity
                onPress={onPressFour}
                style={{
                  backgroundColor:'#0080ff',
                  marginTop:4,
                  height:50,
                  width:width-60,
                  alignItems:'center',
                  justifyContent:'center'
                }}
               
            >
        <Text style={{color:'#ffffff',
        fontWeight:'bold'}}>{this.state.propertybhk4}  {this.state.property4}/5</Text>
      </TouchableOpacity>

      <TouchableOpacity
                onPress={onPressFive}
                style={{
                  backgroundColor:'#0080ff',
                  marginTop:4,
                  height:50,
                  width:width-60,
                  alignItems:'center',
                  justifyContent:'center'
                }}
               
            >
        <Text style={{color:'#ffffff',
        fontWeight:'bold'}}>{this.state.propertybhk5}  {this.state.property5}/5</Text>
      </TouchableOpacity>

      <TouchableOpacity
                onPress={onPressSix}
                style={{
                  backgroundColor:'#0080ff',
                  marginTop:4,
                  height:50,
                  width:width-60,
                  alignItems:'center',
                  justifyContent:'center'
                }}
               
            >
        <Text style={{color:'#ffffff',
        fontWeight:'bold'}}>{this.state.propertybhk6}  {this.state.property6}/5</Text>
      </TouchableOpacity>

      <TouchableOpacity
                onPress={onPressSeven}
                style={{
                  backgroundColor:'#0080ff',
                  marginTop:4,
                  height:50,
                  width:width-60,
                  alignItems:'center',
                  justifyContent:'center'
                }}
               
            >
        <Text style={{color:'#ffffff',
        fontWeight:'bold'}}>{this.state.propertybhk7}  {this.state.property7}/5</Text>
      </TouchableOpacity>

      <TouchableOpacity
                onPress={onPressEight}
                style={{
                  backgroundColor:'#0080ff',
                  marginTop:4,
                  height:50,
                  width:width-60,
                  alignItems:'center',
                  justifyContent:'center'
                }}
               
            >
        <Text style={{color:'#ffffff',
        fontWeight:'bold'}}>{this.state.propertybhk8}  {this.state.property8}/5</Text>
      </TouchableOpacity>

      <TouchableOpacity
                onPress={onPressNine}
                style={{
                  backgroundColor:'#0080ff',
                  marginTop:4,
                  height:50,
                  width:width-60,
                  alignItems:'center',
                  justifyContent:'center'
                }}
               
            >
        <Text style={{color:'#ffffff',
        fontWeight:'bold'}}>{this.state.propertybhk9}  {this.state.property9}/5</Text>
      </TouchableOpacity>

      <TouchableOpacity
                onPress={onPressTen}
                style={{
                  backgroundColor:'#0080ff',
                  marginTop:4,
                  height:50,
                  width:width-60,
                  alignItems:'center',
                  justifyContent:'center'
                }}
               
            >
        <Text style={{color:'#ffffff',
        fontWeight:'bold'}}>{this.state.propertybhk10}  {this.state.property10}/5</Text>
      </TouchableOpacity>

     
          </View>  : this.state.showPropertyType? <PropertyType
                                                     stepsCompleted={this.stepsCompleted}
                                                     propertyListedNumber={this.propertyListedNumber} />:null
      )
    }
  }

 



export  default PropertyList;