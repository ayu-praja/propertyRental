import React, { Component, useState } from "react";
import { View, StyleSheet,Text,TouchableOpacity,Switch,TextInput,FlatList,Dimensions,Image,Platform} from "react-native";
import {ActionSheet,Root} from "native-base";
import ImagePicker from 'react-native-image-picker';
import RNFetchBlob from 'rn-fetch-blob';
import Success from '../Success/Success'
const width=Dimensions.get('window').width;
export default class ImagePickers extends Component{

    constructor(props){
        super(props);
        this.state={
            fileList:[],
            response:[],
            showRender:true
        }
    }

    onClickAddImage=()=>{
        ImagePicker.showImagePicker({noData:false,mediaType:'photo'}, (response) => {
            //console.log('Response = ', response);
           
            if (response.didCancel) {
              //console.log('User cancelled image picker');
            } else if (response.error) {
              //console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
              //console.log('User tapped custom button: ', response.customButton);
            } else {
              const source = { uri: response.uri };
              //console.log(response)
           
              // You can also display the image using data:
              // const source = { uri: 'data:image/jpeg;base64,' + response.data };
           
              this.setState(prevState => ({
                
                fileList: [...this.state.fileList,source],
                response:[...this.state.response,response.data],
                }));
            }
          });
        
    }

    onSubmit=()=>{
        
        
       this.setState({
           showRender:false
       })
        
      

    }
    
    renderItem= ({item,index})=>{
        let {itemViewImage,itemImage}=styles;
        //console.log(item);
            return (
                <View style={itemViewImage}>
                    <Image source={item} style={itemImage} />
                </View>
            )
    };

    render(){
        //console.log(this.props)
        let {content,btnPressStyle,txtStyle,submitImage}=styles;
        //console.log(this.state);
        
        return(
        this.state.showRender?    <Root>
                <View style={content}>
                <Text style={{fontWeight:'bold',fontSize:20}}>Add Property Images</Text>
                <FlatList
                    data={this.state.fileList}
                    renderItem={this.renderItem}
                    keyExtractor={(item,index)=>index.toString()}
                    extraData={this.state}
                 />
                 
                 <TouchableOpacity onPress={this.onClickAddImage} style={btnPressStyle}>
                     <Text style={txtStyle}>Press Add Images</Text>
                 </TouchableOpacity>
                 <TouchableOpacity onPress={this.onSubmit} style={submitImage}>
                     <Text style={txtStyle}>Submit</Text>
                 </TouchableOpacity>
            </View>
            </Root>:<Success
                    user_id='455'
                    room_type={this.props.propertyType}
                     property_service={this.props.propertyFacilities}
                     room_numbers={this.props.numberOfRooms}
                     roomFacilities={this.props.roomFacilities}
                     images={this.state.response} />
            
        );
           
}
}

const styles=StyleSheet.create({
    content:{
        flex:1,
        alignItems:'center',
        
        marginTop:50,
        paddingLeft:30,
        paddingRight:30,
        marginBottom:30
    },
    btnPressStyle:{
        backgroundColor:'#0080ff',
        height:50,
        width:width-60,
        alignItems:'center',
        justifyContent:'center'
    },
    txtStyle:{
        color:'#ffffff',
        fontWeight:'bold'
    },
    itemImage:{
    backgroundColor:'#2F455C',
    height:150,
    width:width-60,
    borderRadius:8,
    resizeMode:'contain',

    },
    submitImage:{
        backgroundColor:'#0080ff',
        height:50,
        width:width-60,
        alignItems:'center',
        justifyContent:'center',
        marginTop:3
        
        },
    itemViewImage:{
        alignItems:'center',
        borderRadius:8,
        marginTop:10
    }
})