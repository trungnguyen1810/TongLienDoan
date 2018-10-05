import * as React from 'react';
import { View, StyleSheet, Dimensions, Button, Text } from 'react-native';
import { TabView, TabBar, SceneMap, Route, NavigationState } from 'react-native-tab-view';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
//import {Icon} from 'react-native-elements';
import Albums from './app/components/Albums';
import ChiTietUuDai from './app/components/ChiTietUuDai';
import MaTichDiem from './app/components/MaTichDiem';
import UuDai from './app/components/UuDai';
import MenuThem from './app/components/MenuThem';
import FAQ from './app/components/FAQ';
import ChinhSach from './app/components/ChinhSach';
import Login from './app/components/Login';
import TimKiem from './app/components/TimKiem';
import { Icon, Thumbnail } from 'native-base';
const ThongTinStack = createStackNavigator({
  Home: { screen: Login }  
});

const UuDaiStack = createStackNavigator({
  UuDai: { screen: UuDai },
  ChiTietUuDai:{screen:ChiTietUuDai}
});
const MaTichDiemStack = createStackNavigator({
  MaTichDiem: { screen: MaTichDiem } 
});
const TimKiemStack = createStackNavigator({
  TimKiem: { screen: TimKiem } 
});
const MenuThemStack = createStackNavigator({
  MenuThem: { screen: MenuThem },
  FAQ: { screen: FAQ },
  ChinhSach: { screen: ChinhSach }
}, { headerMode: 'float' }
);



export default createBottomTabNavigator(
  {
    'Thông tin': { screen: ThongTinStack },
    'Ưu đãi': { screen: UuDaiStack },
    'Mã tích điểm': { screen: MaTichDiemStack },
    'Tìm kiếm': { screen: TimKiemStack },
    'Thêm': { screen: MenuThemStack },
  },
  
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        if (routeName === 'Thông tin') {
          if (focused) {
            return <Thumbnail small source={require('./app/assets/icon_main/icon_thongtin_hien.png')} />
          }
          return <Thumbnail small source={require('./app/assets/icon_main/icon_thongtin.png')} />
        }
        if (routeName === 'Ưu đãi') {
          if (focused) {
            return <Thumbnail small source={require('./app/assets/icon_main/icon_uudai_hien.png')} />
          }
          return <Thumbnail small source={require('./app/assets/icon_main/icon_uudai.png')} />
        }
        if (routeName === 'Mã tích điểm') {
          if (focused) {
            return <Thumbnail small source={require('./app/assets/icon_main/navbar_matichdiem_hien.png')} />
          }
          return <Thumbnail small source={require('./app/assets/icon_main/navbar_matichdiem.png')} />
        }
        if (routeName === 'Tìm kiếm') {
          if (focused) {
            return <Thumbnail small source={require('./app/assets/icon_main/icon_timkiem_hien.png')} />
          }
          return <Thumbnail small source={require('./app/assets/icon_main/icon_timkiem.png')} />
        }
        if (routeName === 'Thêm') {
          if (focused) {
            return <Thumbnail small source={require('./app/assets/icon_main/icon_them_hien.png')} />
          }
          return <Thumbnail small source={require('./app/assets/icon_main/icon_them.png')} />
        }
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
      style:{
        height:70
      }

    },initialRouteName:'Ưu đãi'
  }
);
