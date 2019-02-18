import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity,
  BackHandler,
  I18nManager
} from "react-native";
import {
  Container,
  Button,
  Icon,
  Right,
  Item,
  Input,
  Header,
  Left,
  Body,
  Title
} from "native-base";
const drawerStyles = {
  drawer: {
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 0
  }
};
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import Drawer from "react-native-drawer";
import MyControlPanel from "./ControlPanel";
import tweens from "./tweens";
import styles from "./styles";

import MenuScreen from '../MenuScreen';

import { Font, AppLoading } from 'expo';


export default class DrawerExpanding extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      drawerType: "static",
      openDrawerOffset: 50,
      closedDrawerOffset: 0,
      panOpenMask: 0.1,
      relativeDrag: false,
      fontLoaded: false,
      panThreshold: 0.25,
      tweenHandlerOn: false,
      tweenDuration: 350,
      tweenEasing: "linear",
      disabled: false,
      tweenHandlerPreset: null,
      acceptDoubleTap: false,
      acceptTap: false,
      acceptPan: true,
      tapToClose: true,
      negotiatePan: false,
      side: "left"
    };
  }

  /*
  componentWillMount() {
    setTimeout(() => {
      this.drawer.open();
    }, 1000);
    var that = this;
    BackHandler.addEventListener("hardwareBackPress", function() {
      that.props.navigation.navigate("Drawer");
      return true;
    });
  }*/

  async componentWillMount() {
    await Expo.Font.loadAsync({
      'SFUIDisplay-Medium': require('../../Fonts/SF-UI-Display-Medium.ttf'),
      'SFUIDisplay-Light': require('../../Fonts/SFUIDisplay-Light.ttf'),
      'SFUIDisplay-Regular': require('../../Fonts/SF-UI-Text-Regular.ttf'),
      'SFUIDisplay-Semibold': require('../../Fonts/SFUIDisplay-Semibold.ttf'),

    });
    this.setState({ fontLoaded: true });
  }

  setDrawerType(type) {
    this.setState({
      drawerType: type
    });
  }

  tweenHandler(ratio) {
    if (!this.state.tweenHandlerPreset) {
      return {};
    }
    return tweens[this.state.tweenHandlerPreset](ratio);
  }

  noopChange() {
    this.setState({
      changeVal: Math.random()
    });
  }

  openDrawer() {
    this.drawer.open();
  }

  setStateFrag(frag) {
    this.setState(frag);
  }

  render() {

    const { navigation } = this.props;
    var controlPanel = (
      <MyControlPanel
        closeDrawer={() => {
          this.drawer.close();
        }}

        navigation={navigation}

      />
    );

    if (!this.state.fontLoaded) { 
      return <Expo.AppLoading />;
     }



    return (
      <View style={styles.container}>
        <Drawer
          ref={c => (this.drawer = c)}
          type={this.state.drawerType}
          animation={this.state.animation}
          openDrawerOffset={this.state.openDrawerOffset}
          closedDrawerOffset={this.state.closedDrawerOffset}
          panOpenMask={this.state.panOpenMask}
          panCloseMask={this.state.panCloseMask}
          relativeDrag={this.state.relativeDrag}
          panThreshold={this.state.panThreshold}
          content={controlPanel}
          styles={drawerStyles}
          disabled={this.state.disabled}
          tweenHandler={this.tweenHandler.bind(this)}
          tweenDuration={this.state.tweenDuration}
          tweenEasing={this.state.tweenEasing}
          acceptDoubleTap={this.state.acceptDoubleTap}
          acceptTap={this.state.acceptTap}
          acceptPan={this.state.acceptPan}
          tapToClose={this.state.tapToClose}
          negotiatePan={this.state.negotiatePan}
          changeVal={this.state.changeVal}
          side={this.state.side}
        >
          <View style={styles.drawercontainer}>
            <Header style={styles.headerSec}>
              <Left style={styles.left}>
                <TouchableOpacity
                  onPress={() => this.openDrawer()}
                  style={styles.backArrow}
                >
                  <MaterialCommunityIcons name="menu" size={30} color="#fff" />
                </TouchableOpacity>
              </Left>
              <Body style={styles.body}>
                <Text style={styles.textTitle}>NewsApp RN</Text>
              </Body>
              <Right style={styles.right}>
              {/*
              comment this for now....
              <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("Drawer")}
                  style={styles.backArrow}
                >
                  {I18nManager.isRTL ? (
                    <Ionicons
                      name="ios-arrow-round-forward"
                      size={30}
                      color="#ffffff"
                    />
                  ) : (
                    <Ionicons
                      name="ios-arrow-round-back"
                      size={30}
                      color="#ffffff"
                    />
                  )}
                </TouchableOpacity>

                */}
              </Right>
      
            </Header>
      
            <MenuScreen  navigation={navigation}/>
          </View>
        </Drawer>

      
      </View>
    );
  }
}
