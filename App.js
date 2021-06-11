console.disableYellowBox = true;

import React from 'react';

import {createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import AfficheMainScreen from './screens/Home/HomePage';
import AfficheSpecialScreen from './screens/AfficheSpecialScreen';

// import SignInScreen from './screens/Profil/SignInScreen';
import SignUpScreen from './screens/Profil/SignUpScreen';

import PlanMainScreen from './screens/PlanMainScreen';
import PlanDetailScreen from './screens/PlanDetailScreen';
import PlanOrgaScreen from './screens/PlanOrgaScreen';

import ProfileMainScreen from './screens/Profil/Profil';
import ProfilePreferenceScreen from './screens/ProfilePreferenceScreen';

import HeaderLeft from './screens/components/Header/HeaderLeft';
import HeaderCity from './screens/components/Header/HeaderCity';
import HeaderRightAvatar from './screens/components/Header/HeaderRightAvatar';
import HeaderRightSetting from './screens/components/Header/HeaderRightSetting';

import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';

// import tokenReducer from './reducers/token.reducer';
// import idEventReducer from './reducers/idEvent.reducer';
// import idSortieReducer from './reducers/idSortie.reducer';
// import newSortieReducer from './reducers/newSortie.reducer';
// import idUserReducer from './reducers/idUser.reducer';
import userReducer from './reducers/user.reduceur';

const store = createStore(combineReducers({userReducer}));
// console.log('store.getState=', store.getState.userReduceur)

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
  AfficheSpecialScreen: {
    screen: AfficheSpecialScreen,
    navigationOptions: ({ navigation }) => {
      return {
      headerLeft: () => <HeaderLeft navigation={navigation}/>,
      headerTitle: () => <HeaderCity navigation={navigation}/>,
      headerRight: () => <HeaderRightAvatar navigation={navigation}/>
      }
    }
  },
  // AfficheByTypeScreen: {
  //   screen: AfficheByTypeScreen,
  //   navigationOptions: ({ navigation }) => {
  //     return {
  //     headerLeft: () => <HeaderLeft navigation={navigation}/>,
  //     headerTitle: () => <HeaderCity navigation={navigation}/>,
  //     headerRight: () => <HeaderRightAvatar navigation={navigation}/>
  //     }
  //   }
  // },

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
  PlanMainScreen: {
    screen: PlanMainScreen,
    navigationOptions: ({ navigation }) => {
      return {
      headerLeft: () => <HeaderLeft navigation={navigation}/>,
      headerTitle: () => <HeaderCity navigation={navigation}/>,
      headerRight: () => <HeaderRightAvatar navigation={navigation}/>
      }
    }
  },
  PlanDetailScreen: {
    screen: PlanDetailScreen,
    navigationOptions: ({ navigation }) => {
      return {
      headerLeft: () => <HeaderLeft navigation={navigation}/>,
      headerTitle: () => <HeaderCity navigation={navigation}/>,
      headerRight: () => <HeaderRightAvatar navigation={navigation}/>
      }
    }
  },
  PlanOrgaScreen: {
    screen: PlanOrgaScreen,
    navigationOptions: ({ navigation }) => {
      return {
      headerLeft: () => <HeaderLeft navigation={navigation}/>,
      headerTitle: () => <HeaderCity navigation={navigation}/>,
      headerRight: () => <HeaderRightAvatar navigation={navigation}/>
      }
    }
  }
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
      headerRight: () => <HeaderRightSetting navigation={navigation}/>
      }
    }
  },
  // SignInScreen: {
  //   screen: SignInScreen,
  //   navigationOptions: ({ navigation }) => {
  //     return {
  //     headerLeft: () => <HeaderLeft navigation={navigation}/>,
  //     headerTitle: () => <HeaderCity navigation={navigation}/>,
  //     headerRight: () => <HeaderRightAvatar navigation={navigation}/>
  //     }
  //   }
  // },
  SignUpScreen: {
    screen: SignUpScreen,
    navigationOptions: ({ navigation }) => {
      return {
      headerLeft: () => <HeaderLeft navigation={navigation}/>,
      headerTitle: () => <HeaderCity navigation={navigation}/>,
      headerRight: () => <HeaderRightAvatar navigation={navigation}/>
      }
    }
  },
  // ProfileSettingScreen: {
  //   screen: ProfileSettingScreen,
  //   navigationOptions: ({ navigation }) => {
  //     return {
  //     headerLeft: () => <HeaderLeft navigation={navigation}/>,
  //     headerTitle: () => <HeaderCity navigation={navigation}/>,
  //     headerRight: () => <HeaderRightSetting navigation={navigation}/>
  //     }
  //   }
  // },
  ProfilePreferenceScreen: {
    screen: ProfilePreferenceScreen,
    navigationOptions: ({ navigation }) => {
      return {
      headerLeft: () => <HeaderLeft navigation={navigation}/>,
      headerTitle: () => <HeaderCity navigation={navigation}/>,
      headerRight: () => <HeaderRightAvatar navigation={navigation}/>
      }
    }
  },
  // ProfileAvatarModifScreen: {
  //   screen: ProfileAvatarModifScreen,
  //   navigationOptions: ({ navigation }) => {
  //     return {
  //     headerLeft: () => <HeaderLeft navigation={navigation}/>,
  //     headerTitle: () => <HeaderCity navigation={navigation}/>,
  //     headerRight: () => <HeaderRightSetting navigation={navigation}/>
  //     }
  //   }
  // }
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