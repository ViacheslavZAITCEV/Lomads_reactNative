
import React from 'react';

import {createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import AfficheMainScreen from './screens/Home/HomePage';
import CreateEventScreen from './screens/events/CreateEventScreen';

import ProfileMainScreen from './screens/Profil/Profil';
import ProfileAvatarModifScreen from './screens/Profil/ProfileAvatarModifScreen';

import HeaderLeft from './screens/components/Header/HeaderLeft';
import HeaderCity from './screens/components/Header/HeaderCity';
import HeaderRightAvatar from './screens/components/Header/HeaderRightAvatar';


import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

import userReducer from './reducers/user.reduceur';

// LogBox.ignoreAllLogs(true);
const store = createStore(combineReducers({userReducer}));



// ===============================================================================
//                        NAVIGATION SCREENS A L'AFFICHE
// ===============================================================================

var AfficheScreens = {
  AfficheMainScreen: {
    screen: AfficheMainScreen,
    navigationOptions: ({ navigation }) => {
      return {
      headerLeft: () => <HeaderLeft navigation={navigation}/>,
      headerTitle: () => <HeaderCity navigation={navigation}/>,
      headerRight: () => <HeaderRightAvatar navigation={navigation}/>
      }
    }
  },
}

var AfficheStack = createStackNavigator (AfficheScreens, {
  defaultNavigationOptions: {
    headerStyle: { backgroundColor: '#353C3F', height: 70 }
  }
})

// ===============================================================================
//                        NAVIGATION SCREENS PLANIFIER
// ===============================================================================

var PlanScreens = {
  CreateEventScreen: {
    screen: CreateEventScreen,
    navigationOptions: ({ navigation }) => {
      return {
      headerLeft: () => <HeaderLeft navigation={navigation}/>,
      headerTitle: () => <HeaderCity navigation={navigation}/>,
      headerRight: () => <HeaderRightAvatar navigation={navigation}/>
      }
    }
  },
}

var PlanStack = createStackNavigator (PlanScreens, {
  defaultNavigationOptions: {
    headerStyle: { backgroundColor: '#353C3F', height: 70 }
  }
})

// ===============================================================================
//                        NAVIGATION SCREENS PROFIL
// ===============================================================================

var ProfileScreens = {
  ProfileMainScreen: {
    screen: ProfileMainScreen,
    navigationOptions: ({ navigation }) => {
      return {
      headerLeft: () => <HeaderLeft navigation={navigation}/>,
      headerTitle: () => <HeaderCity navigation={navigation}/>,
      headerRight: () => <HeaderRightAvatar navigation={navigation}/>
      }
    }
  },
  ProfileAvatarModifScreen: {
    screen: ProfileAvatarModifScreen,
    navigationOptions: ({ navigation }) => {
      return {
      headerLeft: () => <HeaderLeft navigation={navigation}/>,
      headerTitle: () => <HeaderCity navigation={navigation}/>,
      headerRight: () => <HeaderRightSetting navigation={navigation}/>
      }
    }
  }
}

var ProfileStack = createStackNavigator (ProfileScreens, {
  defaultNavigationOptions: {
    headerStyle: { backgroundColor: '#353C3F', height: 70 }
  }
})


// ===============================================================================
//                        NAVIGATION BOTTOM NAVIGATOR
// ===============================================================================

var BottomNavigator = createBottomTabNavigator(
  {
    Home: AfficheStack,
    Planing: PlanStack,
    Profil: ProfileStack
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        var iconCode;
        if (navigation.state.routeName === "Home") {
          iconCode = <FontAwesome name="home" size={30} color={tintColor} />
        } else if (navigation.state.routeName === 'Planing') {
          iconCode = <MaterialCommunityIcons name='calendar-heart' size={25} color={tintColor} />
        } else if (navigation.state.routeName === 'Profil') {
          iconCode = <FontAwesome name='user-o' size={21} color={tintColor} />
        }
        return iconCode;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#FF8200',
      inactiveTintColor: '#F8F5F2',
      activeBackgroundColor: '#353C3F',
      inactiveBackgroundColor: '#353C3F',
    },
  }
);

const Navigation = createAppContainer(BottomNavigator);

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
 }