
import React, { Component } from 'react';
import { Text,Image, StatusBar, Platform, ImageBackground,Dimensions,TouchableOpacity, ListView, BackHandler, I18nManager} from 'react-native';
import { Container, Button,Right,Left,ListItem,Content,Body, Header} from 'native-base';
import Swiper from 'react-native-swiper';
// Screen Styles
import styles from './styles';
import { View} from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Images, Metrics } from '../../Themes/';

/**
 *  Social Screen
 */
export default class NewsDetails extends Component {

  componentWillMount() {
    var that = this
    BackHandler.addEventListener('hardwareBackPress', function() {
      that.props.navigation.navigate('Social')
      return true;
    });
  }

  constructor(props) {
 		super(props);
    this.state = {};
 	}

  render(){
		StatusBar.setBarStyle('light-content', true);
		if(Platform.OS === 'android') {
			StatusBar.setBackgroundColor('#2d324f',true);
			StatusBar.setTranslucent(true);
		}

    var that = this;
 
    var data = [
      {
        id: 1,
        name: 'David Oluyale',
        postImage: require('../../../assets/entertainment.jpg'),
        date: 'Oct 24,2015',
        likeCount: 12,
        commentCount: 35,
        shareCount: 5,
        postDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
        description: 'This is a good start for a news app with React Native. I hope you love it. sed do eiusmod tempor incidid sed do eiusmod tempor incidid sed do eiusmod tempor incidid sed do eiusmod tempor incidid sed do eiusmod tempor incidid sed do eiusmod tempor incidid sed do eiusmod tempor incidid sed do eiusmod tempor incidid sed do eiusmod tempor incidid sed do eiusmod tempor incidid sed do eiusmod tempor incidid sed do eiusmod tempor incidid sed do eiusmod tempor incidid sed do eiusmod tempor incidid sed do eiusmod tempor incidid sed do eiusmod tempor incidid sed do eiusmod tempor incidid sed do eiusmod tempor incidid sed do eiusmod tempor incidid sed do eiusmod tempor incidid sed do eiusmod tempor incidid sed do eiusmod tempor incidid sed do eiusmod tempor incidid sed do eiusmod tempor incidid sed do eiusmod tempor incidid sed do eiusmod tempor incidid sed do eiusmod tempor incidid sed do eiusmod tempor incidid sed do eiusmod tempor incidid sed do eiusmod tempor incididsed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
     
    ]

    return(
      <Container style={styles.main}>
      <Header style={styles.header}>
          <Left style={styles.left}>
            <TouchableOpacity style={styles.backArrow} onPress={()=>this.props.navigation.navigate('DrawerExpanding')}>
            { 
              (I18nManager.isRTL)
              ?
                  <MaterialIcons name="chevron-right" size={25} color='white'/>
              :
                  <MaterialIcons name="chevron-left" size={25} color='white'/>
            }
            </TouchableOpacity>
          </Left>
          <Body style={styles.body}>
            <Text style={styles.textTitle}>News Details</Text>
          </Body>
          <Right style={styles.right}>
            <TouchableOpacity onPress={()=>alert("Share")}>
              <Ionicons name="ios-share" size={25} color='white'/>
            </TouchableOpacity>
          </Right>
      </Header>
        <Content>
        <View style={styles.rowMainView} animation="bounceInRight" duration={100} delay={400}>
        {
        data.map((item, index) => {
         return (
           <View style={ (index === data.length - 1) ? styles.lastRowBg : styles.rowBg} key={index} >
             {
               (item.postImage == '') ? null :
               <Image style={styles.postDescImage} source={item.postImage}></Image>
             }
             <Text style={styles.rowPostDescription}>{item.postDescription}</Text>
             <View style={styles.postDateView}>
              <Text style={[styles.postAuthorDate, {color: "#adadad"}]}>by</Text>
              <Text style={[styles.postAuthorDate, {color: "#0691ce", marginLeft: (Metrics.WIDTH) * 0.010}]}>{item.name}</Text>
              <Text style={[styles.postAuthorDate, {color: "#6f6f6f", marginLeft: (Metrics.WIDTH) * 0.025, marginTop: -(Metrics.HEIGHT) * 0.007}]}>.</Text>
              <Text style={[styles.postAuthorDate, {color: "#adadad", marginLeft: (Metrics.WIDTH) * 0.025}]}>{item.date}</Text>
             </View>
             <View style={styles.rowDescView}>
               <Text style={styles.rowDescTxt}>{item.description}</Text>
             </View>
            <View style={styles.dividerHorizontal}/>
             <View style={styles.likeCommentShareView}>
             
             </View>
   				</View>
         )
        })
      }
      </View>
      </Content>
      </Container>
    );
  }
}
