import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import { Container, Header, Content, Item, Input, Icon } from 'native-base';
import AccordianMenu from './AccordianMenu';
import styles from './styles';
import { Fonts, Metrics, Colors, Images } from '../../Themes/';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
export default class ControlPanel extends Component {
  render() {

    const {navigation} = this.props;
    var data = [

      { 
        title: 'NEWS',
        color: '#fff',
        micon: Images.Dairy,
        details: [
          {
            submenu: 'Latest',
          }
        ],
      },

      { 
        title: 'SPORTS',
        color: '#fff',
        micon: Images.Dairy,
        details: [
          {
            submenu: 'La liga',
          },
          {
            submenu: 'European League',
          },
          {
            submenu: 'African league',
          },
          {
            submenu: 'Spainish',
          },
          {
            submenu: 'General',
          },
        ],
      },
      {
        title: 'ENTERTAINMENT',
        color: '#fff',
        micon: Images.Meat,
        details: [
          {
            submenu: 'Interviews',
          },
          {
            submenu: 'Movies',
          },
          {
            submenu: 'Music',
          },
          {
            submenu: 'Fashion',
          },
        ],
      },
      {
        title: 'POLITICS',
        color: '#fa9301',
        micon: Images.Fruit,
        details: [
          {
            submenu: 'Metro',
          },
          {
            submenu: 'World News',
          },
          {
            submenu: 'Diplomats',
          },
        ],
      },
        
      {
        title: 'ABOUT US',
        color: '#f8d411',
        micon: Images.BreadAndPastries,
        details: [
          {
            submenu: 'Contact Info',
          },
        ],
      },






    ]
    return (
      <View>
        <View style={styles.menuListSec}>
          <ScrollView>
            {
              data.map((menu,value)=>{
                return (
                  <AccordianMenu
                  navigation={navigation}
                  title={menu.title} bgColors={menu.color} 
                  submenuList={menu.details} menuIcon={menu.micon} key={"menuview_" + (value)}>
                  </AccordianMenu>
                );
              })
            }
          </ScrollView>
        </View>
      </View>
    )
  }
}
