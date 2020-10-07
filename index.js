/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import PropertyType from './Components/PropertyType/PropertyType'

AppRegistry.registerComponent(appName, () => PropertyType);
