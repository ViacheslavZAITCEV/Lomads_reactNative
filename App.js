console.disableYellowBox = true;

import React from 'react';

import AfficheMainScreen from './screens/AfficheMainScreen';
import AfficheSpecialScreen from './screens/AfficheSpecialScreen';
// import AfficheByTypeScreen from './screens/AfficheByTypeScreen';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';

import FriendsMainScreen from './screens/FriendsMainScreen';
import FriendsProfileScreen from './screens/FriendsProfileScreen';
import FriendsResearchScreen from './screens/FriendsResearchScreen';
import FriendsAddScreen from './screens/FriendsAddScreen';

// import MessagesMainScreen from './screens/MessagesMainScreen';

import PlanMainScreen from './screens/PlanMainScreen';
// import PlanInvitationScreen from './screens/PlanInvitationScreen';
import PlanDetailScreen from './screens/PlanDetailScreen';
import PlanOrgaScreen from './screens/PlanOrgaScreen';
// import PlanJoinScreen from './screens/PlanJoinScreen';

import ProfileMainScreen from './screens/ProfileMainScreen';
// import ProfileSettingScreen from './screens/ProfileSettingScreen';
import ProfilePreferenceScreen from './screens/ProfilePreferenceScreen';
// import ProfileAvatarModifScreen from './screens/ProfileAvatarModifScreen';

import {createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import HeaderLeft from './shared/HeaderLeft';
import HeaderCity from './shared/HeaderCity';
import HeaderRightAvatar from './shared/HeaderRightAvatar';
import HeaderRightSetting from './shared/HeaderRightSetting';

import { Entypo, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';

import tokenReducer from './reducers/token.reducer';
import idEventReducer from './reducers/idevent.reducer';
import idSortieReducer from './reducers/idSortie.reducer';
import newSortieReducer from './reducers/newSortie.reducer';
import idUserReducer from './reducers/idUser.reducer';

const store = createStore(combineReducers({tokenReducer,idEventReducer,idSortieReducer,newSortieReducer,idUserReducer}));
console.log('store.getState=', store.getState.userReduceur)

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
    headerStyle: { backgroundColor: '#16253D', height: 70 }
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
  // PlanInvitationScreen: {
  //   screen: PlanInvitationScreen,
  //   navigationOptions: ({ navigation }) => {
  //     return {
  //     headerLeft: () => <HeaderLeft navigation={navigation}/>,
  //     headerTitle: () => <HeaderCity navigation={navigation}/>,
  //     headerRight: () => <HeaderRightAvatar navigation={navigation}/>
  //     }
  //   }
  // },
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
  // ,
  // PlanJoinScreen: {
  //   screen: PlanJoinScreen,
  //   navigationOptions: ({ navigation }) => {
  //     return {
  //     headerLeft: () => <HeaderLeft navigation={navigation}/>,
  //     headerTitle: () => <HeaderCity navigation={navigation}/>,
  //     headerRight: () => <HeaderRightAvatar navigation={navigation}/>
  //     }
  //   }
  // }
}

var PlanStack = createStackNavigator (PlanScreens, {
  defaultNavigationOptions: {
    headerStyle: { backgroundColor: '#16253D', height: 70 }
  }
})

// ===============================================================================
//                        NAVIGATION SCREENS AMIS
// ===============================================================================

var FriendsScreens = {
  FriendsMainScreen: {
    screen: FriendsMainScreen,
    navigationOptions: ({ navigation }) => {
      return {
      headerLeft: () => <HeaderLeft navigation={navigation}/>,
      headerTitle: () => <HeaderCity navigation={navigation}/>,
      headerRight: () => <HeaderRightAvatar navigation={navigation}/>
      }
    }
  },
  FriendsResearchScreen: {
    screen: FriendsResearchScreen,
    navigationOptions: ({ navigation }) => {
      return {
      headerLeft: () => <HeaderLeft navigation={navigation}/>,
      headerTitle: () => <HeaderCity navigation={navigation}/>,
      headerRight: () => <HeaderRightAvatar navigation={navigation}/>
      }
    }
  },
  FriendsAddScreen: {
    screen: FriendsAddScreen,
    navigationOptions: ({ navigation }) => {
      return {
      headerLeft: () => <HeaderLeft navigation={navigation}/>,
      headerTitle: () => <HeaderCity navigation={navigation}/>,
      headerRight: () => <HeaderRightAvatar navigation={navigation}/>
      }
    }
  },
  FriendsProfileScreen: {
    screen: FriendsProfileScreen,
    navigationOptions: ({ navigation }) => {
      return {
      headerLeft: () => <HeaderLeft navigation={navigation}/>,
      headerTitle: () => <HeaderCity navigation={navigation}/>,
      headerRight: () => <HeaderRightAvatar navigation={navigation}/>
      }
    }
  }
}

var FriendsStack = createStackNavigator (FriendsScreens, {
  defaultNavigationOptions: {
    headerStyle: { backgroundColor: '#16253D', height: 70 }
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
  SignInScreen: {
    screen: SignInScreen,
    navigationOptions: ({ navigation }) => {
      return {
      headerLeft: () => <HeaderLeft navigation={navigation}/>,
      headerTitle: () => <HeaderCity navigation={navigation}/>,
      headerRight: () => <HeaderRightAvatar navigation={navigation}/>
      }
    }
  },
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
    headerStyle: { backgroundColor: '#16253D', height: 70 }
  }
})


// ===============================================================================
//                        NAVIGATION BOTTOM NAVIGATOR
// ===============================================================================

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

const Navigation = createAppContainer(BottomNavigator);

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
 }