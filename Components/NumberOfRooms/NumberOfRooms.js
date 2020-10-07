import React, { Component, useState } from "react";
import { View, StyleSheet,Text,TouchableOpacity,Switch,TextInput,Dimensions } from "react-native";
import RoomFacilities from '../RoomFacilities/RoomFacilities'
const width=Dimensions.get('window').width;
export default class NumberOfRooms extends Component{
   


    constructor(props) {
        super(props);
        this.state = {  
            NumberOfRooms:this.props.propertyType=='Hotel'?''
                               :this.props.propertyType==1 ? '1'
                               :this.props.propertyType==2 ? '2'
                               :this.props.propertyType==3 ? '3':null,
            NumberOfBHK:this.props.propertyType=='Hotel'?'hotel'
                               :this.props.propertyType==1 ? '1 BHK'
                               :this.props.propertyType==2 ? '2 BHK'
                               :this.props.propertyType==3 ? '3 BHK':null,
            shouldRender:true
        };  
    }

    render(){
       // console.log(this.props.propertyFacilities)
       const onPress=()=>{
            
          if(this.state.NumberOfRooms==''){
              alert('Enter number Of rooms')
          }
          else{
            this.setState({shouldRender:false})
          }
            
           
          }

        return(
           this.state.shouldRender? <View
               
                style={{
                        flex: 1,
                        flexDirection: 'column',
                        backgroundColor: 'white',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor:'white'
                        
                }}>

                    <Text style={{fontWeight:'bold',fontSize:25,marginBottom:20}}>Enter Number Of Rooms</Text>
                    <View
                        style={{
                            
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            
                        }}>
                    <Text style={{fontWeight:'bold',fontSize:15}}>{this.state.NumberOfBHK}:  </Text>
                    <TextInput
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1,marginBottom:20 }}
                        onChangeText={text => this.setState({NumberOfRooms:text})}
                        value={this.state.NumberOfRooms}
                    />
                    </View>
                    
                    <TouchableOpacity
                
                style={{
                    backgroundColor:'#0080ff',
        height:50,
        width:width-60,
        alignItems:'center',
        justifyContent:'center'
                }}
                onPress={onPress}
                
               
            ><Text style={{color:'#ffffff',
        fontWeight:'bold'}}>Next</Text>
            </TouchableOpacity>
        

                </View>:<RoomFacilities
                            propertyType={this.props.propertyType}
                            propertyFacilities={this.props.propertyFacilities}
                            numberOfRooms={this.state.NumberOfRooms} />
            
            
           
        )
    }
}