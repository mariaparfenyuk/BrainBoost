/**
 * @format
 */

import {AppRegistry} from 'react-native';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import App from './App';
import {name as appName} from './app.json';
import { registerRootComponent } from 'expo';


// AppRegistry.registerComponent("BrainBoost", () => App);
registerRootComponent(App);
AppRegistry.registerComponent(appName, () => gestureHandlerRootHOC(Main));