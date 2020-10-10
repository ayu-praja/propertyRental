

const initialState={
     
  NumberOfRooms:1,
  NumberOfBHK:1,
  shouldRender:true
    
 
}

const NumberOfRoomReducer = (state = initialState, action) => {

switch (action.type) {
case 'SET_NUMBER_OF_ROOMS_BHK':
    
  return {
    shouldRender:true,
    NumberOfRooms:action.room,
    NumberOfBHK:action.bhk
  };

case 'SET_SHOW_RENDER':
   console.log("set show render")
    return {
          ...state,
          shouldRender:false
        };

case 'SET_NUMBER_OF_ROOMS':
    return {
        ...state,
        NumberOfRooms:action.room,
    }
                          

  break;
default:
  return state;
}
}

export default NumberOfRoomReducer;