import React, { Component, useState } from "react";
import {Alert, View, StyleSheet,Text,TouchableOpacity,Switch,ScrollView,Dimensions } from "react-native";
import ImagePicker from '../ImagePicker/ImagePickers'
const width=Dimensions.get('window').width;


export default class RoomFacilities extends Component{

    constructor(props){
        
        super(props);
        
        this.state = {  
            roomFacility:[],
            showRender:false,
            showImagePicker:false
            
        
            
        }; 
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
        this.setState(prevState => ({
            roomFacility:a,
            showRender:true
            }));

            
    }
   

    render(){
        
        var numberOfRooms=[];
        for(let i=0;i<this.props.numberOfRooms;i++){
            
                numberOfRooms[i]=0;


        }
        //console.log(this.state)
        const onPress = () => {
                this.setState({
                    showRender:false,
                    showImagePicker:true
                })
            }
       
        
       
        return (
            this.state.showRender?
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
                    value={this.state.roomFacility[index].Fan}  
                    onValueChange ={(switchValue)=>{
                        
                        const newObject = {...this.state}
                       
                        const newArray = newObject.roomFacility[index];
                       
                        
                        
                            newArray.Fan=switchValue;
                            newObject.roomFacility[index]=newArray;
                          

                      
                        
                        this.setState({
                            roomFacility: newObject.roomFacility
                            });
                        
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
                    value={this.state.roomFacility[index].AC}  
                    onValueChange ={(switchValue)=>{
                        
                        const newObject = {...this.state}
                       
                        const newArray = newObject.roomFacility[index];
                       
                        
                        
                            newArray.AC=switchValue;
                            newObject.roomFacility[index]=newArray;
                          

                      
                        
                        this.setState({
                            roomFacility: newObject.roomFacility
                            });
                        
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
                    value={this.state.roomFacility[index].Light}  
                    onValueChange ={(switchValue)=>{
                        
                        const newObject = {...this.state}
                       
                        const newArray = newObject.roomFacility[index];
                       
                        
                        
                            newArray.Light=switchValue;
                            newObject.roomFacility[index]=newArray;
                          

                      
                        
                        this.setState({
                            roomFacility: newObject.roomFacility
                            });
                        
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
                    value={this.state.roomFacility[index].Fridge}  
                    onValueChange ={(switchValue)=>{
                        
                        const newObject = {...this.state}
                       
                        const newArray = newObject.roomFacility[index];
                       
                        
                        
                            newArray.Fridge=switchValue;
                            newObject.roomFacility[index]=newArray;
                          

                      
                        
                        this.setState({
                            roomFacility: newObject.roomFacility
                            });
                        
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
                    value={this.state.roomFacility[index].TV}  
                    onValueChange ={(switchValue)=>{
                        
                        const newObject = {...this.state}
                       
                        const newArray = newObject.roomFacility[index];
                       
                        
                        
                            newArray.TV=switchValue;
                            newObject.roomFacility[index]=newArray;
                          

                      
                        
                        this.setState({
                            roomFacility: newObject.roomFacility
                            });
                        
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
                </ScrollView>:this.state.showImagePicker?<ImagePicker
                                                propertyType={this.props.propertyType}
                                                propertyFacilities={this.props.propertyFacilities}
                                                numberOfRooms={this.props.numberOfRooms}
                                                roomFacilities={this.state.roomFacility}
                
                 />:null

        )
    }
}