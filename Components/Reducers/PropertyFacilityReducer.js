

const initialState={
     
        gym: false ,
        pool:false,
        tabletennis:false,
        garden:false,
        shouldSelect:false,
        shouldRender:true,
        
     
  }

const PropertyFacilityReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case 'SET_BOOLEAN':
      return {
        ...state,
        shouldSelect:action.shouldSelect,
        shouldRender:action.shouldRender
      }
    case 'SET_GYM':
     
      return {
        ...state,
        gym:!state.gym
      };
    case 'SET_POOL':
     
        return {
          ...state,
          pool:!state.pool
        };
    case 'SET_TABLE_TENNIS':
     
        return {
              ...state,
            tabletennis:!state.tabletennis
            };
    case 'SET_GARDEN':
     
            return {
                  ...state,
                  garden:!state.garden
            };
    case 'SET_SHOW_RENDER':
     
            return {
                      ...state,
                      shouldRender:!state.shouldRender
            };
                              
    
      break;
    default:
      return state;
  }
}

export default PropertyFacilityReducer;