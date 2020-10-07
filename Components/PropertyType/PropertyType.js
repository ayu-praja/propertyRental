import React, { Component, useState } from "react";
import {Alert, View, StyleSheet,Text,TouchableOpacity,Dimensions } from "react-native";
import {Picker} from '@react-native-community/picker';
import PropertyFacilities from '../PropertyFacilities/PropertyFacilities';
const width=Dimensions.get('window').width;
class PropertyType extends Component {

    state = {
        propertyType: 0,
        shouldRender:true
      }
      
      render(){
        const onPress = () => {
            if(this.state.propertyType==0){
                alert('please select option from dropdown')
            }
            else{
            this.setState({shouldRender:false});
            }
            

            
        }
          return (
              
             this.state.shouldRender? <View 
                    style={{
                        flex: 1,
                        flexDirection: 'column',
                        backgroundColor: 'white',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <Text style={{fontWeight:'bold',fontSize:25,marginBottom:20}}>Please select Property Type</Text>
            <Picker
            selectedValue={this.state.propertyType}
            style=
                {{
                    
                    height: 50,
                    width: 250,

                }}
            onValueChange={(itemValue, itemIndex) =>
            {
                console.log(itemValue)
                
                
                this.setState({propertyType: itemValue})
                
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
    </View>:<PropertyFacilities propertyType={this.state.propertyType} />
           
          )
      }
      
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: "center"
  }
});

export default PropertyType;