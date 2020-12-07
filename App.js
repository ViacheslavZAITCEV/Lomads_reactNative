console.disableYellowBox = true;

import React from 'react';

import AfficheMainScreen from './screens/AfficheMainScreen';
import FriendsMainScreen from './screens/FriendsMainScreen';
import MessagesMainScreen from './screens/MessagesMainScreen';
import PlanMainScreen from './screens/PlanMainScreen';
import ProfileMainScreen from './screens/ProfileMainScreen';

import {createAppContainer } from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import { Entypo, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

var BottomNavigator = createBottomTabNavigator(
  {
    "À l'affiche": AfficheMainScreen,
    Messages: MessagesMainScreen,
    Planifier: PlanMainScreen,
    Amis: FriendsMainScreen,
    Profil: ProfileMainScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        var iconCode;
        if (navigation.state.routeName == "À l'affiche") {
          iconCode = <MaterialCommunityIcons name="bulletin-board" size={25} color={tintColor} />
        } else if (navigation.state.routeName == 'Messages') {
          iconCode = <Entypo name='chat' size={25} color={tintColor} />
        } else if (navigation.state.routeName == 'Planifier') {
          iconCode = <MaterialCommunityIcons name='calendar-heart' size={25} color={tintColor} />
        } else if (navigation.state.routeName == 'Amis') {
          iconCode = <MaterialCommunityIcons name="account-supervisor-circle" size={25} color={tintColor} />
        } else if (navigation.state.routeName == 'Profil') {
          iconCode = <FontAwesome name='user-circle' size={21} color={tintColor} />
        }
        return iconCode;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#EFB509',
      inactiveTintColor: '#F8F5F2',
      activeBackgroundColor: '#16253D',
      inactiveBackgroundColor: '#16253D',
    },
  }
);

var Navigation = createAppContainer(BottomNavigator);
export default Navigation;
