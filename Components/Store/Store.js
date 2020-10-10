import { createStore, combineReducers } from 'redux';
import PropertyReducer from '../Reducers/PropertyReducer';
import PropertyFacilityReducer from '../Reducers/PropertyFacilityReducer'
import NumberOfRoomReducer from '../Reducers/NumberOfRoomReducer';
import RoomFacilityReducer from '../Reducers/RoomFacilityReducer'

const rootReducer = combineReducers({
    PropertyReducer: PropertyReducer,
    PropertyFacilityReducer:PropertyFacilityReducer,
    NumberOfRoomReducer:NumberOfRoomReducer,
    RoomFacilityReducer:RoomFacilityReducer
    
    
})

// const configureStore = () => createStore(PropertyReducer);

// export default configureStore;
const Store = createStore(rootReducer);
export default Store;