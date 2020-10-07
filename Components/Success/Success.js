import React, { Component, useState } from "react";
import { View, StyleSheet,Text,TouchableOpacity,Switch,TextInput,FlatList,Dimensions,Image,Platform} from "react-native";
import axios from 'axios';
export default class Success extends Component{
    state={
        dataSentToServer:false
    }
    

    componentDidMount(){
        var finalJson=JSON.parse(JSON.stringify(this.props));
        
        for(var i=1;i<=finalJson.roomFacilities.length;i++){
            finalJson['room'+i+'_service']=finalJson.roomFacilities[i-1];
        }
        delete finalJson.roomFacilities;
        delete finalJson.images;
        if(finalJson.room_type!='Hotel'){
            finalJson.room_type=finalJson.room_type+'bhk'
        }
        
        //console.log(finalJson)
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: finalJson
        };
        axios.post('https://5f7aff0f40abc60016472a92.mockapi.io/submitdata_all', finalJson)
          .then(function (response) {
           
              //console.log(this.state)
              alert("Data sent successfully")
              
            console.log(response.data);
          })
          .catch(function (error) {
              alert("Oh! something bad happend");
             
            console.log(error);
          });
    }

    render(){
        
        return(
            this.state.dataSentToServer?
            <View
                
                    style={{
                        flex: 1,
                        flexDirection: 'column',
                        backgroundColor: 'white',
                        justifyContent: 'center',
                        alignItems: 'center',
            
                }}><Text style={{fontWeight:'bold',fontSize:15}}>Data Sent To Server Successfully</Text></View>
            
           :null
        )
    }
}