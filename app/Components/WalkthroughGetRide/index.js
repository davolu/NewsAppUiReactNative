
import React, { Component } from 'react';
import { Text, View, Image, StatusBar, Platform, ImageBackground,Dimensions,TouchableOpacity, BackHandler, I18nManager} from 'react-native';
import { Container, Right, Header,Left, Body } from 'native-base';
import Swiper from 'react-native-swiper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
// Screen Styles
import styles from './styles';

import { Font, AppLoading } from 'expo';

export default class WalkthroughGetRide extends Component {

  constructor(props) {
 		super(props);
     this.state = {
      fontLoaded: false,
    }


   }
   
   
  async componentWillMount() {
    await Expo.Font.loadAsync({
      'SFUIDisplay-Medium': require('../../Fonts/SF-UI-Display-Medium.ttf'),
      'SFUIDisplay-Light': require('../../Fonts/SFUIDisplay-Light.ttf'),
      'SFUIDisplay-Regular': require('../../Fonts/SF-UI-Text-Regular.ttf'),

    });
    this.setState({ fontLoaded: true });
  }

 
  render(){

    const { fontLoaded } = this.state

		StatusBar.setBarStyle('dark-content', true);
		if(Platform.OS === 'android') {
			StatusBar.setBackgroundColor('rgba(0,0,0,0.3)',true);
			StatusBar.setTranslucent(true);
    }

		let swiperImage = {
			uri : 'https://antiqueruby.aliansoftware.net//Images/walkthrough/ic_image_wtsix.png'
		};

    
    var data = [
      {
        id: 1,
        image: require("../../../assets/sport.jpg"),
        title: 'Sport News',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        id: 2,
        image: require("../../../assets/politics.jpeg"),
        title: 'Latest on Politics',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        
        id: 3,
        image:  require("../../../assets/entertainment.jpg"),
        title: 'Entertainment',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        id: 4,
        image:  require("../../../assets/weather.jpeg"),
        title: 'Weather Reports',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
    ]


    if (!this.state.fontLoaded) { 
      return <Expo.AppLoading />;
     }

 
    return(
     <ImageBackground source={require('../../../assets/red-bg.png')} style={styles.container}>
      <Header style={styles.header}>
        <Left style={styles.left}>
          <TouchableOpacity style={styles.backArrow} onPress={()=>this.props.navigation.navigate('Walkthrough')}>
           </TouchableOpacity>
        </Left>
        <Body style={styles.body}>
        </Body>
        <Right style={styles.right}>
          <TouchableOpacity onPress={()=> this.props.navigation.navigate('DrawerExpanding')}>
            <Text style={styles.skipTxt}>Skip</Text>
          </TouchableOpacity>
        </Right>
       </Header>

       <View style={styles.slidesec}>
         <Swiper showsButtons={false}
           autoplay={true}
           autoplayTimeout={2.5}
           activeDot={<View style={styles.activeDot} />}
           dot={<View style={styles.dot} />}>
             {
              data.map((item, index) => {
                 return (
                   <View style={styles.slide} key={index}>
                     <Image source={item.image} style={styles.sliderImage}/>
                     <View style={styles.contentStyle}>
                       <Text style={styles.headertext}>
                        {item.title}
                       </Text>
                       <Text style={styles.desctext}>
                        {item.description}
                       </Text>
                     </View>
                   </View>
                 )
               })
             }
         </Swiper>
       </View>

       <View style={styles.btnsec}>
         <TouchableOpacity onPress={()=>   this.props.navigation.navigate("DrawerExpanding")} style={styles.discoverBg}>
           <Text style={styles.discoverTxt}>GET STARTED</Text>
         </TouchableOpacity>
       </View>
    </ImageBackground>

    );
  }
}
