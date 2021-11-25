import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import HomeScreen from './src/HomeScreen';
import ScannerScreen from './src/ScannerScreen';
import IonIcons from 'react-native-vector-icons/Ionicons';
import Orientation from 'react-native-orientation';

IonIcons.loadFont().then();
Orientation.lockToPortrait();

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      cardStyle: {backgroundColor: 'transparent'},
    },
    Scanner: {
      screen: ScannerScreen,
    },
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
  },
);

// const AppNavigator = createStackNavigator(
//   {
//     Home: {
//       screen: HomeScreen,
//       cardStyle: {backgroundColor: 'transparent'},
//     },
//     Scanner: {
//       screen: ScannerScreen,
//     },
//   },
//   {
//     initialRouteName: 'Home',
//     headerMode: 'none',
//   },
// );

const AppContainer = createAppContainer(AppNavigator);
