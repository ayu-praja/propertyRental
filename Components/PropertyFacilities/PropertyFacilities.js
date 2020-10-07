import React, { Component, useState } from "react";
import { View, StyleSheet,Text,TouchableOpacity,Switch,Dimensions } from "react-native";
import NumberOfRooms from '../NumberOfRooms/NumberOfRooms'
const width=Dimensions.get('window').width;
export default class PropertyFacilities extends Component {
    constructor(props) {
    super(props);
    this.state = {  
        gym: false ,
        pool:false,
        tablettennis:false,
        garden:false,
        shouldRender:true,
        selectedFacility:[],
        listOfFacilities:[]
    };  
}
    
  
    
    render(){
        let facilities=[]
        var listOfFacility;
       // console.log(this.props)
        const onPress=()=>{
            
          
        listOfFacility={...this.state};
          delete listOfFacility.shouldRender;
          delete listOfFacility.selectedFacility;
          delete listOfFacility.listOfFacilities;
         // console.log(listOfFacility);

          this.setState({shouldRender:false,listOfFacilities:listOfFacility})
          
         
        }
       

        
       
        return (
            
            this.state.shouldRender?    <View
               
                style={{
                        flex: 1,
                        flexDirection: 'column',
                        backgroundColor: 'white',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor:'white'
                        
                }}>
                 <Text style={{fontWeight:'bold',fontSize:25,marginBottom:20}}>Please select Property facilities </Text>
                <View
                    style={{
                        
                        justifyContent: 'center',
                        alignItems: 'center',
                        
                        margin:0,
                        padding:0
                        
                    }}>
                    <Text style={{fontWeight:'bold'}}>Gym: </Text>
                        <Switch  
                    value={this.state.gym}  
                    onValueChange ={(switchValue)=>{
                     this.setState(prevState => ({
                            gym: !prevState.gym,
                            selectedFacility: [...this.state.selectedFacility,'Gym']
                            }));
                        
                        }
                        
                }/>
                    </View>
                
                    <View
                    style={{
                        
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <Text style={{fontWeight:'bold'}}>Pool: </Text>
                        <Switch  
                    value={this.state.pool}  
                    onValueChange ={(switchValue)=>{
                     this.setState(prevState => ({
                            pool: !prevState.pool,
                            selectedFacility: [...this.state.selectedFacility,'Pool']
                            }));
                        
                        }
                        
                }/>
                    </View>


                    <View
                    style={{
                        
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <Text style={{fontWeight:'bold'}}>Table Tennis: </Text>
                        <Switch  
                    value={this.state.tablettennis}  
                    onValueChange ={(switchValue)=>{
                     this.setState(prevState => ({
                        tablettennis: !prevState.tablettennis,
                        selectedFacility: [...this.state.selectedFacility,'Table Tennis']
                            }));
                        
                        }
                        
                }/>
                    </View>

                    <View
                    style={{
                        
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <Text style={{fontWeight:'bold'}}>Garden: </Text>
                        <Switch  
                    value={this.state.garden}  
                    onValueChange ={(switchValue)=>{
                     this.setState(prevState => ({
                        garden: !prevState.garden,
                        selectedFacility: [...this.state.selectedFacility,'Garden']
                            }));
                        
                        }
                        
                }/>
                    </View>
                
                         
                
                 
                
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

            </View>:<NumberOfRooms  propertyType={this.props.propertyType} propertyFacilities={this.state.listOfFacilities}/>
        )
    }
}