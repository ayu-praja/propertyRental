import React, { Component, useState } from "react";
import { View, StyleSheet,Text,TouchableOpacity,Switch,Dimensions } from "react-native";
import { connect } from "react-redux";
import axios from 'axios';
import Toast from 'react-native-toast-message';
import NumberOfRooms from '../NumberOfRooms/NumberOfRooms';
import AsyncStorage from '@react-native-community/async-storage'
const width=Dimensions.get('window').width;
class PropertyFacilities extends Component {
    constructor(props) {
    super(props);
     
}
    
componentDidMount(){
    if(2>this.props.stepsCompleted){
      this.props.setBoolean(true,true);
    }
    else{
      
      
      this.props.setBoolean(true,false);
      
    }
}
    
    render(){
        let facilities=[]
        var listOfFacility;
       //console.log('abhi wala'+this.props.propertyType)
      // console.log('abhi wala'+this.props.stepsCompleted)
      const onPress = async() => {
            listOfFacility={
                "gym":this.props.gym,
                "pool":this.props.pool,
                "tabletennis":this.props.tabletennis,
                "garden":this.props.garden
            }
          console.log(listOfFacility);
          this.props.setShouldRender();
        //   this.setState({shouldRender:false,listOfFacilities:listOfFacility})
        await AsyncStorage.setItem('property'+this.props.propertyListedNumber,'2');


        axios.post('https://5f7aff0f40abc60016472a92.mockapi.io/submitdata_all', JSON.parse(JSON.stringify(listOfFacility)))
          .then(function (response) {
            Toast.show({
              text1: 'Successfully sent to server',
              text2: JSON.stringify(listOfFacility)
            });
            
              
            
        
          })
          .catch(function (error) {
            Toast.show({
              text1: 'Oops Something Bad Happend',
            
            });
             
            console.log(error);
          });
          
         
        }
       

        
       
        return (
            
       this.props.shouldSelect?     this.props.shouldRender ?    <View
               
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
                    value={this.props.gym}  
                    onValueChange ={(switchValue)=>{
                    this.props.setGym();
                        
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
                    value={this.props.pool}  
                    onValueChange ={(switchValue)=>{
                        this.props.setPool();
                        
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
                    value={this.props.tabletennis}  
                    onValueChange ={(switchValue)=>{
                        this.props.setTableTennis();
                        
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
                    value={this.props.garden}  
                    onValueChange ={(switchValue)=>{
                        this.props.setGarden();
                        
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

            </View>:<NumberOfRooms 
             propertyType={this.props.propertyType}
             stepsCompleted={this.props.stepsCompleted==1? 2:this.props.stepsCompleted}
              propertyListedNumber={this.props.propertyListedNumber}

             />:null
        )
    }
}

const mapStateToProps = (state) => {
    //console.log(state);
    return {
      gym: state.PropertyFacilityReducer.gym,
      pool:state.PropertyFacilityReducer.pool,
      tabletennis:state.PropertyFacilityReducer.tabletennis,
      garden:state.PropertyFacilityReducer.garden,
      shouldRender:state.PropertyFacilityReducer.shouldRender,
      shouldSelect:state.PropertyFacilityReducer.shouldSelect
    }
  }
  
  
  const mapDispatchToProps = (dispatch) => {
   
    return {
      setGym: () => dispatch({type:'SET_GYM'}),
      setPool: () => dispatch({type:'SET_POOL'}),
      setTableTennis: () => dispatch({type:'SET_TABLE_TENNIS'}),
      setGarden: () => dispatch({type:'SET_GARDEN'}),
      setShouldRender:()=>dispatch({type:'SET_SHOW_RENDER'}),
      setBoolean:(shouldSelect,shouldRender)=>dispatch({type:'SET_BOOLEAN',shouldSelect:shouldSelect,shouldRender:shouldRender})
      
    }
  }

  export default connect(mapStateToProps,mapDispatchToProps)(PropertyFacilities)

  