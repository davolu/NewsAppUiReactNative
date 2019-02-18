import { StyleSheet, PixelRatio, Platform } from 'react-native';
const deviceScreen = require('Dimensions').get('window')
import { Fonts, Metrics, Colors } from '../../Themes/';

module.exports = StyleSheet.create({
  scrollView: {
    backgroundColor: '#B99BC4',
  },
  container: {
    flex: 1,
    backgroundColor: '#f15045',
  },
  controlPanel: {
    flex: 1,
    backgroundColor:'transparent',
  },
  controlPanelText: {
    color:'white',
  },
  menuimageBg:{
    width: Metrics.WIDTH,
    height: Metrics.HEIGHT,
  },
  menuClose:{
    width: Metrics.WIDTH,
    height: Metrics.HEIGHT * 0.10,
    paddingTop: Fonts.moderateScale(10),
    paddingLeft: Fonts.moderateScale(25),
    marginBottom: Fonts.moderateScale(10),
  },
  menuListSec:{
    width: Metrics.WIDTH * 0.865,
    paddingTop: 15,
    alignSelf: 'center',
    height: Metrics.HEIGHT,
    backgroundColor: "#f15045",
    paddingBottom: 10,
  },
  menuList:{
    width: Metrics.WIDTH * 0.42,
    height: Metrics.WIDTH * 0.35,
    padding: 15,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center'
  },
  menuItemText:{
    marginTop: Fonts.moderateScale(6),
    color: '#ffffff',
    fontFamily: 'SFUIDisplay-Regular'
  },
  msgCountSec:{
  },
  
  menumsgCount:{
    backgroundColor: '#fff',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#ef4836',
    overflow: 'hidden',
    color: 'white',
    borderRadius: 7,
    width: 14,
    height: 14,
    fontSize: 9,
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 1111
  },

  headerSec: {
    backgroundColor: "#f15045",
		height: Metrics.HEIGHT * 0.1,
		borderBottomWidth: 0,
		paddingTop: (Metrics.HEIGHT * 0.045),
		elevation: 0,
		paddingLeft: (Metrics.WIDTH * 0.05),
		paddingRight: (Metrics.WIDTH * 0.05),
  },

	left: {
		flex: 0.5,
  },

	backArrow: {
    width:30,
		justifyContent: 'center',
		alignItems: 'center'
  },

	body: {
		flex: 3,
		alignItems: 'center',
  },

	textTitle: {
    color: Colors.snow,
    fontSize: Fonts.moderateScale(16),
    alignSelf: 'center',
	  fontFamily: Fonts.type.sfuiDisplaySemibold,
  },

	right: {
    flex: 0.5,
  },
  drawercontainer:{
    width: Metrics.WIDTH,
    height: Metrics.HEIGHT,
    backgroundColor: '#fff',
  },

});
