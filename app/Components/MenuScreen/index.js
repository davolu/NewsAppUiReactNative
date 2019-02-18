import React, { Component } from 'react';
import { Text, Image, StatusBar, Platform, ImageBackground, Dimensions, TouchableOpacity , ListView, BackHandler, I18nManager} from 'react-native';
import { Container, Button, Content, Header, Body, Title, Right, Left, Icon } from 'native-base';
// Screen Styles
import styles from './styles';
import { View} from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Images } from '../../Themes/';

 
export default class MenuScreen extends Component {

 
  

    constructor(props) {
   		super(props);

      
      const dataObjects = [
        {
          id: 1,
          name: 'Lorem ipsum dolor sit amet,',
          comment: 'Lorem ipsum dolor sit amet, conses adipisi, sed do eiusmod tempor ince idunt ut labore et dolore.',
          likes: 12,
          date: "3 mins ago",
          image:  require('../../../assets/sport.jpg'),
        },
        {
          id: 2,
          name: 'Sed do eiusmod tempor ince idunt',
          comment: 'Lorem ipsum dolor sit amet, conses adipisi, sed do eiusmod tempor ince idunt ut labore et dolore.',
          likes: 12,
          date: "3 mins ago",
          image:  require('../../../assets/entertainment.jpg'),
        },
        {
          id: 3,
          name: 'Ince idunt ut labore',
          comment: 'Lorem ipsum dolor sit amet, conses adipisi, sed do eiusmod tempor ince idunt ut labore et dolore.',
          likes: 12,
          date: "3 days ago",
          image:  require('../../../assets/weather.jpeg'),
        },

        
        {
          id: 1,
          name: 'Lorem ipsum dolor sit amet,',
          comment: 'Lorem ipsum dolor sit amet, conses adipisi, sed do eiusmod tempor ince idunt ut labore et dolore.',
          likes: 12,
          date: "3 mins ago",
          image:  require('../../../assets/sport.jpg'),
        },
        {
          id: 2,
          name: 'Sed do eiusmod tempor ince idunt',
          comment: 'Lorem ipsum dolor sit amet, conses adipisi, sed do eiusmod tempor ince idunt ut labore et dolore.',
          likes: 12,
          date: "3 mins ago",
          image:  require('../../../assets/entertainment.jpg'),
        },
        {
          id: 3,
          name: 'Ince idunt ut labore',
          comment: 'Lorem ipsum dolor sit amet, conses adipisi, sed do eiusmod tempor ince idunt ut labore et dolore.',
          likes: 12,
          date: "3 days ago",
          image:  require('../../../assets/weather.jpeg'),
        },
       
       
        
      ]

      const rowHasChanged = (r1, r2) => r1 !== r2
      const ds = new ListView.DataSource({rowHasChanged})

   		this.state = {
        isLoading: true,
        fontLoaded: false,
        dataSource: ds.cloneWithRows(dataObjects),
      };
     }
     
     async componentWillMount() {
      await Expo.Font.loadAsync({
        'SFUIDisplay-Medium': require('../../Fonts/SF-UI-Display-Medium.ttf'),
        'SFUIDisplay-Light': require('../../Fonts/SFUIDisplay-Light.ttf'),
        'SFUIDisplay-Regular': require('../../Fonts/SF-UI-Text-Regular.ttf'),
        'SFUIDisplay-Bold': require('../../Fonts/SFUIDisplay-Bold.ttf'),

      });
      this.setState({ fontLoaded: true });
    }
  


    _renderRow(rowData) {
      return(
        <View>
          <TouchableOpacity onPress={()=>  this.props.navigation.navigate('NewsDetails')}>
        <View style={styles.rowMain}>
          <Image source={rowData.image} style={styles.images}/>
          <View style={styles.newsContent}>
            <Text numberOfLines={1} style={styles.name}>{rowData.name}</Text>
            <Text numberOfLines={3} style={styles.comment}>{rowData.comment}</Text>
            <View style={styles.followContent}>
            
              <View style={styles.likeContent}> 
                <Text style={styles.textStyle}>{rowData.date}</Text>
              </View>
            </View>
          </View>
        </View>
        </TouchableOpacity>
        <View style={styles.separatorStyle}/>

        </View>
      )

    }
  render(){
		StatusBar.setBarStyle('light-content', true);
		if(Platform.OS === 'android') {
			StatusBar.setBackgroundColor('#2d324f',true);
			StatusBar.setTranslucent(true);
		}

    var that = this;
    var underlineStyle = ((I18nManager.isRTL) ? styles.tabUnderLineTrans : styles.tabUnderLine );


    if (!this.state.fontLoaded) { 
      return <Expo.AppLoading />;
     }


    return(
      <Container style={styles.main}>
      

<View>

<ListView
                 contentContainerStyle={styles.listContent}
                 dataSource={this.state.dataSource}
                 renderRow={this._renderRow.bind(this)}
                 renderSeparator={this._renderSeparator}
                 enableEmptySections
                 pageSize={4}/>
</View>

       
      </Container>
    )
  }
}
