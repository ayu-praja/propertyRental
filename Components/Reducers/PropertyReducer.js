

const initialState={
    propertyType: 0,
    showRender:true,
    propertyAlreadySelected:false
  }

const PropertyReducer = (state = initialState, action) => {
  //console.log("hiiii");
  switch (action.type) {
    case 'SET_PROPERTY_TYPE':
     // console.log('hi')
      return {
        ...state,
        propertyType:action.data
      };
      break;
    case 'SET_PROPERTY_SHOW_RENDER':
      return {
        ...state,
        showRender:action.data
      };
      break;
      case 'SET_ALL':
        return {
          propertyType:action.data,
          showRender:action.showRender,
          propertyAlreadySelected:action.propertyAlreadySelected
        }
    default:
      return state;
  }
}

export default PropertyReducer;