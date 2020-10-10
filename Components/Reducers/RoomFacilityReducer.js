

const initialState={
     
  roomFacility:'',
  showRender:false,
  showImagePicker:false
    
 
}

const RoomFacilityReducer = (state = initialState, action) => {

switch (action.type) {
case 'SET_ROOM_SHOWRENDER':
    console.log('set all'+action.showRender)
  return {
    
    roomFacility:action.data,
    showRender:action.showRender,
    showImagePicker:action.showImagePicker
  };


                          

  break;
default:
  return state;
}
}

export default RoomFacilityReducer;