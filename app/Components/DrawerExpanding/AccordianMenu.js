import React, { Component } from 'react';
import { Platform, StyleSheet, TouchableOpacity, Image, TouchableWithoutFeedback, Animated} from 'react-native';
import { createAnimatableComponent, View, Text } from 'react-native-animatable';
import { Fonts, Metrics, Colors } from '../../Themes/';

export default  class AccordionMenu extends Component{
    constructor(props){
        super(props);
        this.state = {
          expanded : false,
          animation   : new Animated.Value(),
        };
    }
    toggle(){

        let initialValue    = this.state.expanded? this.state.maxHeight + this.state.minHeight : this.state.minHeight,
            finalValue      = this.state.expanded? this.state.minHeight : this.state.maxHeight + this.state.minHeight;

        this.state.animation.setValue(initialValue);
        Animated.spring(
            this.state.animation,
            {
                toValue: finalValue
            }
        ).start();

        this.setState({
            expanded : !this.state.expanded
        });
    }

    _setMaxHeight(event){
        this.setState({
            maxHeight   : event.nativeEvent.layout.height
        });
    }

    _setMinHeight(event){
        this.setState({
            minHeight   : event.nativeEvent.layout.height
        });
    }


    render(){
      var ct = 0
        return (

            <Animated.View style={[styles.container,{height: this.state.animation}]}>
              <View style={[styles.menuIconSec,{backgroundColor: this.props.bgColors}]}>
                <TouchableWithoutFeedback onPress={this.toggle.bind(this)} underlayColor="transparent">
                  <View><Image source={this.props.menuIcon} style={styles.myIconStyle}/></View>
                </TouchableWithoutFeedback>
              </View>
              <View style={styles.menuStyleSec}>

                <View style={styles.titleContainer} onLayout={this._setMinHeight.bind(this)}>
                    <TouchableWithoutFeedback onPress={this.toggle.bind(this)} underlayColor="transparent">
                        <View style={styles.titleCollapse}>
                          <View style={styles.headerTitle}>
                            <Text style={styles.Header}>{this.props.title}</Text>
                          </View>
                        </View>
                    </TouchableWithoutFeedback>
                </View>

               {
                   this.state.expanded && (
                     <View style={styles.body} onLayout={this._setMaxHeight.bind(this)}>
                        <View style={styles.bodyText}>
                          {
                            this.props.submenuList.map((submenuTitle,value)=>{
                              ct = ct + 30
                              return (
                                <View style={styles.submenutitleSec} key={"submenuview_" + (value)}>
                                  <TouchableWithoutFeedback onPress={()=> this.props.navigation.navigate('Category')}>
                                    <View animation="fadeInLeft" delay={ct}><Text style={styles.mybodyText}>{submenuTitle.submenu}</Text></View>
                                  </TouchableWithoutFeedback>
                                </View>
                              )
                            })
                          }
                        </View>
                     </View>)
               }

              </View>
              </Animated.View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
      width: Metrics.WIDTH * 0.86,
      backgroundColor: '#f15045',
      borderBottomWidth: 0.7,
      borderBottomColor: '#fff',
      flexDirection: 'row',
      justifyContent:'center',
      alignItems:'center'
    },
    menuIconSec:{
      paddingTop: 8,
      marginLeft: 5,
      marginTop: 10,
      marginBottom: 10,
      width: Metrics.WIDTH * 0.11,
      alignSelf: 'stretch',
      borderWidth: 1,
      borderColor: 'transparent',
      borderRadius: Metrics.WIDTH * 0.06,
      justifyContent: 'flex-start',
      alignItems: 'center'
    },
    menuStyleSec:{
      backgroundColor: 'transparent',
      width: Metrics.WIDTH * 0.72,
    },
    myIconStyle:{
      width: 20,
      height: 17,
    },
    titleContainer : {
        flexDirection: 'row',
        justifyContent:'center',
        alignItems:'center'
    },
    titleCollapse:{
      flexDirection: 'row',
    },
    headerTitle:{
      width: (Metrics.WIDTH * 0.72),
      flexDirection: 'row',
      padding: 8,
      alignItems: 'center',
    },
    Header: {
        width: Metrics.WIDTH * 0.72,
        paddingTop : 10,
        paddingLeft: 7,
        paddingBottom : 10,
        color: '#fff',
        fontSize: 16,
        textAlign: 'left'
    },
    mybodyText: {
        width: Metrics.WIDTH * 0.72,
        paddingTop : 5,
        paddingLeft: 7,
        paddingBottom : 5,
        color: '#fff',
        fontSize: 16,
        textAlign: 'left'
    },
    body: {
        paddingLeft: 25,
        paddingRight: 5,
        paddingTop  : 0,
        width: (Metrics.WIDTH * 0.72),
    },
    bodyText:{
      // backgroundColor: 'grey',
      // paddingLeft: Metrics.WIDTH * 0.15
      // color: '#4A4A4A',
      // fontSize: 16,
    },
    submenutitleSec: {
      paddingLeft: Metrics.WIDTH * 0.05
    },
    iconStyleSec:{
      width: 28,
      height: 28,
      borderWidth: 1,
      borderColor: 'transparent',
      borderRadius: 14,
      justifyContent: 'center',
      alignItems: 'center'
    },
});
