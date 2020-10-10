import React, { Component, useState } from "react";
import { View, StyleSheet,Text,TouchableOpacity,Switch,TextInput,FlatList,Dimensions,Image,Platform} from "react-native";
import axios from 'axios';
import Toast from 'react-native-toast-message';

import PropertyList from '../PropertyList/PropertyList'
export default class Success extends Component{

    constructor(props){
        super(props);
        this.state={
            dataSentToServer:false
        }
    }
   
    

    componentDidMount(){
        var finalJson=JSON.parse(JSON.stringify(this.props));
        
        
        
        if(finalJson.room_type!='Hotel'){
            finalJson.room_type=finalJson.room_type+'bhk'
        }
        
        console.log(finalJson)
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: finalJson
        };
        axios.post('https://5f7aff0f40abc60016472a92.mockapi.io/submitdata_all', finalJson)
          .then(function (response) {
           
            Toast.show({
                text1: 'Data sent to server',
               
              });
              
            console.log(response.data);
        
          })
          .catch(function (error) {
            Toast.show({
                text1: 'OH! Something bad happend',
               
              });
             
            console.log(error);
          });
    }

    render(){
        
        return(
            
            <PropertyList />
            
           
        )
    }
}