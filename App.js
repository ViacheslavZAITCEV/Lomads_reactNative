console.disableYellowBox = true;

import React from 'react';

import AfficheMainScreen from './screens/AfficheMainScreen';
import AfficheSpecialScreen from './screens/AfficheSpecialScreen';
import AfficheByTypeScreen from './screens/AfficheByTypeScreen';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';

import FriendsMainScreen from './screens/FriendsMainScreen';
import FriendsProfileScreen from './screens/FriendsProfileScreen';
import FriendsAddScreen from './screens/FriendsAddScreen';

import MessagesMainScreen from './screens/MessagesMainScreen';

import PlanMainScreen from './screens/PlanMainScreen';
import PlanInvitationScreen from './screens/PlanInvitationScreen';
import PlanDetailScreen from './screens/PlanDetailScreen';
import PlanOrgaScreen from './screens/PlanOrgaScreen';

import ProfileMainScreen from './screens/ProfileMainScreen';
import ProfileSettingScreen from './screens/ProfileSettingScreen';
import ProfilePreferenceScreen from './screens/ProfilePreferenceScreen';
import ProfileAvatarModifScreen from './screens/ProfileAvatarModifScreen';

import {createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import { Entypo, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

var AfficheStack = createStackNavigator({
  AfficheMainScreen: {
    screen: AfficheMainScreen,
    navigationOptions: () => ({
      header: null
    })
  },
  AfficheSpecialScreen: {
    screen: AfficheSpecialScreen,
    navigationOptions: () => ({
      header: null
    })
  },
  AfficheByTypeScreen: {
    screen: AfficheByTypeScreen,
    navigationOptions: () => ({
      header: null
    })
  },
  SignInScreen: {
    screen: SignInScreen,
    navigationOptions: () => ({
      header: null
    })
  },
  SignUpScreen: {
    screen: SignUpScreen,
    navigationOptions: () => ({
      header: null
    })
  }
});

var PlanStack = createStackNavigator({
  PlanMainScreen: {
    screen: PlanMainScreen,
    navigationOptions: () => ({
      header: null
    })
  },
  PlanInvitationScreen: {
    screen: PlanInvitationScreen,
    navigationOptions: () => ({
      header: null
    })
  },
  PlanDetailScreen: {
    screen: PlanDetailScreen,
    navigationOptions: () => ({
      header: null
    })
  },
  PlanOrgaScreen: {
    screen: PlanOrgaScreen,
    navigationOptions: () => ({
      header: null
    })
  }
});

var FriendsStack = createStackNavigator({
  FriendsMainScreen: {
    screen: FriendsMainScreen,
    navigationOptions: () => ({
      header: null
    })
  },
  FriendsProfileScreen: {
    screen: FriendsProfileScreen,
    navigationOptions: () => ({
      header: null
    })
  },
  FriendsAddScreen: {
    screen: FriendsAddScreen,
    navigationOptions: () => ({
      header: null
    })
  }
});

var ProfileStack = createStackNavigator({
  ProfileMainScreen: {
    screen: ProfileMainScreen,
    navigationOptions: () => ({
      header: null
    })
  },
  ProfileSettingScreen: {
    screen: ProfileSettingScreen,
    navigationOptions: () => ({
      header: null
    })
  },
  ProfilePreferenceScreen: {
    screen: ProfilePreferenceScreen,
    navigationOptions: () => ({
      header: null
    })
  },
  ProfileAvatarModifScreen: {
    screen: ProfileAvatarModifScreen,
    navigationOptions: () => ({
      header: null
    })
  },
});

var BottomNavigator = createBottomTabNavigator(
  {
    "À l'affiche": AfficheStack,
    // Messages: MessagesMainScreen,
    Planifier: PlanStack,
    Amis: FriendsStack,
    Profil: ProfileStack
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
