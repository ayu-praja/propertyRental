import React, { Component, useState } from "react";
import {Alert, View, StyleSheet,Text,TouchableOpacity,Switch,ScrollView,Dimensions } from "react-native";
import ImagePicker from '../ImagePicker/ImagePickers';
import axios from 'axios';
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-community/async-storage';
import { connect } from 'react-redux';
const width=Dimensions.get('window').width;


class RoomFacilities extends Component{

    constructor(props){
        
        super(props);
        
       
    }

    componentDidMount(){
        var b=[{
            Fan:false,
            AC:false,
            Light:false,
            Fridge:false,
            TV:false,
            
        }]
        var a=[{
            Fan:false,
            AC:false,
            Light:false,
            Fridge:false,
            TV:false,
            
        }
    ]
        for(let i=1;i<this.props.numberOfRooms;i++){
            a=a.concat([{
                Fan:false,
                AC:false,
                Light:false,
                Fridge:false,
                TV:false,
                
            }])
        }
        

          //normal situation

            if(4>this.props.stepsCompleted){
                this.props.setAll(a,true,false);
              }
              else{
                
                
                this.props.setAll(a,false,true);
                
              }
            
    }
   

    render(){
        // console.log('abhi'+this.props.stepsCompleted);
        //  console.log('abhi'+this.props.propertyListedNumber);
        var numberOfRooms=[];
        for(let i=0;i<this.props.numberOfRooms;i++){
            
                numberOfRooms[i]=0;


        }
        //console.log(this.state)
        const onPress =async () => {
            var data={...this.props.roomFacility};
            console.log('datas'+JSON.stringify(data))
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
            await AsyncStorage.setItem('property'+this.props.propertyListedNumber,'4')
                this.props.setAll(this.props.roomFacility,false,true);

            }
       
        
       
        return (
            this.props.showRender?
            <ScrollView>
            <View
               
                style={{
                        flex: 1,
                        flexDirection: 'column',
                        backgroundColor: 'white',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop:100
                        
                        
                }}>
                <Text style={{fontWeight:'bold',fontSize:30}}>Enter Each Room Facility</Text>
             {numberOfRooms.map((item, index) => {
                
                  return (
                      
                      <View key={index}>

                      <Text style={{fontWeight:'bold',marginTop:50,fontSize:20}}>Enter Facilities for Room {index+1}</Text>
                    <View
                    style={{
                        
                        justifyContent: 'center',
                        alignItems: 'center',
                        
                        margin:0,
                        padding:0
                        
                    }}>
                    <Text>Fan: </Text>
                        <Switch  
                    value={this.props.roomFacility[index].Fan}  
                    onValueChange ={(switchValue)=>{

                       const newObject={...this.props.roomFacility};
                       newObject[index].Fan=switchValue
                       this.props.setAll(newObject,true,false)
                        
                        // const newObject = {...this.state}
                       
                        // const newArray = newObject.roomFacility[index];
                       
                        
                        
                        //     newArray.Fan=switchValue;
                        //     newObject.roomFacility[index]=newArray;
                          

                      
                        
                        // this.setState({
                        //     roomFacility: newObject.roomFacility
                        //     });
                        
                    }
            
                        
                }/>
                    </View>


                    <View
                    style={{
                        
                        justifyContent: 'center',
                        alignItems: 'center',
                        
                        margin:0,
                        padding:0
                        
                    }}>
                    <Text>AC: </Text>
                        <Switch  
                     value={this.props.roomFacility[index].AC}  
                    onValueChange ={(switchValue)=>{
                        
                        const newObject={...this.props.roomFacility};
                       newObject[index].AC=switchValue
                       this.props.setAll(newObject,true,false)
                        
                    }
            
                        
                }/>
                    </View>


                    <View
                    style={{
                        
                        justifyContent: 'center',
                        alignItems: 'center',
                        
                        margin:0,
                        padding:0
                        
                    }}>
                    <Text>Light: </Text>
                        <Switch  
                     value={this.props.roomFacility[index].Light}   
                    onValueChange ={(switchValue)=>{
                        
                        const newObject={...this.props.roomFacility};
                       newObject[index].Light=switchValue
                       this.props.setAll(newObject,true,false)
                        
                    }
            
                        
                }/>
                    </View>


                    <View
                    style={{
                        
                        justifyContent: 'center',
                        alignItems: 'center',
                        
                        margin:0,
                        padding:0
                        
                    }}>
                    <Text>Fridge: </Text>
                        <Switch  
                     value={this.props.roomFacility[index].Fridge}  
                    onValueChange ={(switchValue)=>{
                        
                        const newObject={...this.props.roomFacility};
                       newObject[index].Fridge=switchValue
                       this.props.setAll(newObject,true,false)
                        
                    }
            
                        
                }/>
                    </View>


                    <View
                    style={{
                        
                        justifyContent: 'center',
                        alignItems: 'center',
                        
                        margin:0,
                        padding:0
                        
                    }}>
                    <Text>TV: </Text>
                        <Switch  
                     value={this.props.roomFacility[index].TV}   
                    onValueChange ={(switchValue)=>{
                        const newObject={...this.props.roomFacility};
                       newObject[index].TV=switchValue
                       this.props.setAll(newObject,true,false)
                        
                        
                    }
            
                        
                }/>
                    </View>
                    
                    </View>

                    




                    

                  )
             })}

    
                
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
                </View>
                </ScrollView>:this.props.showImagePicker?<ImagePicker
                                                propertyType={this.props.propertyType}
                                                stepsCompleted={this.props.stepsCompleted==3? 4:this.props.stepsCompleted}
                                                propertyListedNumber={this.props.propertyListedNumber}
                                                numberOfRooms={this.props.numberOfRooms}
                                                
                
                 />:null

        )
    }
}


const mapStateToProps = (state) => {
    //console.log(state);
    return {
        roomFacility:state.RoomFacilityReducer.roomFacility,
        showRender:state.RoomFacilityReducer.showRender,
        showImagePicker:state.RoomFacilityReducer.showImagePicker
    }
  }
  
  
  const mapDispatchToProps = (dispatch) => {
   
    return {
      setAll: (data,showRender,showImagePicker) => dispatch({type:'SET_ROOM_SHOWRENDER',data:data,showRender:showRender,showImagePicker:showImagePicker})
      
      
    }
  }


  export default  connect(mapStateToProps,mapDispatchToProps)(RoomFacilities);