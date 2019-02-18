import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator, createAppContainer, createDrawerNavigator  } from 'react-navigation';

import WalkthroughScreen from './app/Components/WalkthroughGetRide';
import DrawerExpanding from './app/Components/DrawerExpanding';
import MenuScreen from './app/Components/MenuScreen';

import NewsDetails from './app/Components/NewsDetails';

import Category from './app/Components/Category';


const AppNavigator = createStackNavigator({
  
  WalkthroughScreen: {
    screen: WalkthroughScreen,
    navigationOptions: {
      title: "",
      header: null, 
      navigationBar: null
    },
  },


  Category: {
    screen: Category,
    navigationOptions: {
      title: "",
      header: null, 
      navigationBar: null
    },
  },


  NewsDetails: {
    screen: NewsDetails,
    navigationOptions: {
      title: "",
      header: null, 
      navigationBar: null
    },
  },
  MenuScreen: {
    screen: MenuScreen,
    navigationOptions: {
      title: "",
      header: null, 
      navigationBar: null
    },
  },

   
  DrawerExpanding: {
    screen: DrawerExpanding,
    navigationOptions: {
      title: "",
      header: null, 
      navigationBar: null
    },
  }
});



const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return (
      <AppContainer  />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
