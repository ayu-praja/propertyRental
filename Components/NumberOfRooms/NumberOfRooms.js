import React, { Component, useState } from "react";
import { View, StyleSheet,Text,TouchableOpacity,Switch,TextInput,Dimensions } from "react-native";
import { connect } from "react-redux";
import RoomFacilities from '../RoomFacilities/RoomFacilities';
import axios from 'axios';
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-community/async-storage'
const width=Dimensions.get('window').width;
 class NumberOfRooms extends Component{
   constructor(props){
       super(props);
       this.state={
        isComponentRender:false,
        isRendered:true,
    }
   }
    

    
        
      componentDidMount=async()=>{

          
        var rooms=   this.props.propertyType=='Hotel'?''
        :this.props.propertyType==1 ? '1'
        :this.props.propertyType==2 ? '2'
        :this.props.propertyType==3 ? '3':null
 
        var bhk=this.props.propertyType=='Hotel'?'hotel'
        :this.props.propertyType==1 ? '1 BHK'
        :this.props.propertyType==2 ? '2 BHK'
        :this.props.propertyType==3 ? '3 BHK':null
 
        this.props.setNumberOfRoomsAndBHK(rooms,bhk);
        
        if(3>this.props.stepsCompleted){
            this.setState({
                isComponentRender:true
            })
          }
          else{
            const value = await AsyncStorage.getItem('numberOfRooms'+this.props.propertyListedNumber);
            this.props.setNumberOfRooms(value)
            this.setState({
                isComponentRender:true,
        isRendered:false,
            })
            
          }
        
        
        //console.log("did mm")
       

      }
          
    

    render(){
       // console.log(this.props.propertyFacilities)
     // console.log('render')
    //  console.log('abhi'+this.props.stepsCompleted);
    //  console.log('abhi'+this.props.propertyListedNumber);
    //  console.log('ayush',this.props.shouldRender)
       const onPress=async()=>{
            
          if(this.props.NumberOfRooms==''){
              alert('Enter number Of rooms')
          }
          else{
            await AsyncStorage.setItem('numberOfRooms'+this.props.propertyListedNumber,this.props.NumberOfRooms);
            await AsyncStorage.setItem('property'+this.props.propertyListedNumber,'3')
            var data={
                "Number-Of-Rooms":this.props.NumberOfRooms
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
            
           
          
            

            
           this.setState({
               isRendered:false
           })
          }
            
           
          }

        return(
       this.state.isComponentRender? ( this.state.isRendered? <View
               
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
                    <Text style={{fontWeight:'bold',fontSize:15}}>{this.props.NumberOfBHK}:  </Text>
                    <TextInput
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1,marginBottom:20 }}
                        onChangeText={text => this.props.setNumberOfRooms(text)}
                        value={this.props.NumberOfRooms}
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
                            stepsCompleted={this.props.stepsCompleted==2? 3:this.props.stepsCompleted}
                            propertyListedNumber={this.props.propertyListedNumber}
                            numberOfRooms={this.props.NumberOfRooms} />

       ):null
            
            
           
        )
    }
}


const mapStateToProps = (state) => {
    //console.log(state);
    return {
        NumberOfRooms: state.NumberOfRoomReducer.NumberOfRooms,
        NumberOfBHK:state.NumberOfRoomReducer.NumberOfBHK,
        shouldRender:state.NumberOfRoomReducer.shouldRender
      
    }
  }
  
  
  const mapDispatchToProps = (dispatch) => {
   
    return {
        setNumberOfRoomsAndBHK: (room,bhk) => dispatch({type:'SET_NUMBER_OF_ROOMS_BHK',room:room,bhk,bhk}),
        setNumberOfRooms: (room) => dispatch({type:'SET_NUMBER_OF_ROOMS',room:room}),
        setShouldRender: () => dispatch({type:'SET_SHOW_RENDER'}),
      
      
    }
  }

  export default  connect(mapStateToProps,mapDispatchToProps)(NumberOfRooms)