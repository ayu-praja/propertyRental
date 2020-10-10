import React, { Component, useState } from "react";
import {Alert, View, StyleSheet,Text,TouchableOpacity,Dimensions } from "react-native";
import {Picker} from '@react-native-community/picker';
import PropertyFacilities from '../PropertyFacilities/PropertyFacilities';
import axios from 'axios';

import AsyncStorage from '@react-native-community/async-storage';
import Toast from 'react-native-toast-message';
import { connect } from 'react-redux';
const width=Dimensions.get('window').width;
class PropertyType extends Component {

    constructor(props){
      super(props);
     

      
    }

    componentDidMount=async()=>{
        if(1>this.props.stepsCompleted){
          this.props.setAll(0,true,true)
        }
        else{
          const value = await AsyncStorage.getItem('propertyTypebhk'+this.props.propertyListedNumber);
          
          this.props.setAll(value,false,true);
          
        }
    }
    
      
      render(){
        // console.log(this.props.stepsCompleted);0
        // console.log(this.props.propertyListedNumber);1

        var stepsCompleted;
        const onPress = async() => {
        
            if(this.props.propertyType==0){
                alert('please select option from dropdown')
            }
            else{
              await AsyncStorage.setItem('propertyTypebhk'+this.props.propertyListedNumber,this.props.propertyType);
              await AsyncStorage.setItem('property'+this.props.propertyListedNumber,'1');
              var data={
                "property-type":this.props.propertyType
              }
              
              axios.post('https://5f7aff0f40abc60016472a92.mockapi.io/submitdata_all', JSON.parse(JSON.stringify(data)))
          .then(function (response) {
            Toast.show({
              text1: 'Successfully sent to server',
              text2: JSON.stringify(data)
            });
            
              
            
        
          })
          .catch(function (error) {
            Toast.show({
              text1: 'Oops Something Bad Happend',
            
            });
             
            console.log(error);
          });
              
              this.props.setShouldRender(false);
            }
            

            
        }
          return (
              
          this.props.propertyAlreadySelected?   this.props.showRender? <View 
                    style={{
                        flex: 1,
                        flexDirection: 'column',
                        backgroundColor: 'white',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <Text style={{fontWeight:'bold',fontSize:25,marginBottom:20}}>Please select Property Type</Text>
            <Picker
            selectedValue={this.props.propertyType}
            style=
                {{
                    
                    height: 50,
                    width: 250,

                }}
            onValueChange={(itemValue, itemIndex) =>
            {
                console.log(itemValue)
                
                
                this.props.add(itemValue)
                
            }
              
            }>
             <Picker.Item label="Please select an option..." value="0" />
            <Picker.Item label="1 BHK" value="1" />
            <Picker.Item label="2 BHK" value="2" />
            <Picker.Item label="3 BHK" value="3" />
            <Picker.Item label="Hotel" value="Hotel" />
          </Picker>

          <TouchableOpacity
                onPress={onPress}
                style={{
                  backgroundColor:'#0080ff',
                  height:50,
                  width:width-60,
                  alignItems:'center',
                  justifyContent:'center'
                }}
               
            >
        <Text style={{color:'#ffffff',
        fontWeight:'bold'}}>Next</Text>
      </TouchableOpacity>
    </View>:<PropertyFacilities 
    propertyType={this.props.propertyType}
    stepsCompleted={this.props.stepsCompleted==0? 1:this.props.stepsCompleted}
    propertyListedNumber={this.props.propertyListedNumber}
    
    
    
    
     /> :null
           
          )
      }
      
}
// console.log(this.props.stepsCompleted);0
        // console.log(this.props.propertyListedNumber);1
const mapStateToProps = (state) => {
  //console.log(state);
  return {
    propertyType: state.PropertyReducer.propertyType,
    showRender:state.PropertyReducer.showRender,
    propertyAlreadySelected:state.PropertyReducer.propertyAlreadySelected
  }
}


const mapDispatchToProps = (dispatch) => {
 
  return {
    setShouldRender: (value) => dispatch({type:'SET_PROPERTY_SHOW_RENDER',data:value}),
    add: (value) => dispatch({type:'SET_PROPERTY_TYPE',data:value}),
    setAll:(data,showRender,propertyAlreadySelected)=> dispatch({type:'SET_ALL',data:data,showRender:showRender,propertyAlreadySelected:propertyAlreadySelected})
    
  }
}



export default connect(mapStateToProps,mapDispatchToProps)(PropertyType);