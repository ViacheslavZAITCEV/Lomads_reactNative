import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Header, Icon } from 'react-native-elements';

function HeaderWithSetting() {
  return (
    <NavigationContainer>
      <Header
        backgroundColor='#16253D'
        height={40}
        leftComponent={{
          text: 'GoWizMe',
          style: { color: '#F8F5F2', fontWeight: 'bold', fontSize: 15 }
        }}
        centerComponent={{
          text: 'Paris',
          style: { color: '#F8F5F2', fontWeight: 'bold', fontSize: 25 },
          onPress: () => { console.log("OnPress VILLE OK") }
        }}
        rightComponent={
          <Icon name='setting' type='antdesign' size={25} color='#F8F5F2'
            onPress={() => console.log('OnPress vers ProfileSettingScreen')}
          />
        }
      />
    </NavigationContainer>
  )
}

export default HeaderWithSetting;