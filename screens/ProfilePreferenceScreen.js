import React from 'react';
import { View, ScrollView, Button } from 'react-native';
import { Text } from 'react-native-elements';

import HeaderWithSetting from './HeaderWithSetting';

export default function ProfilePreferenceScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>

      <HeaderWithSetting/>

      <Button title="Go to ProfileMainScreen"
        onPress={() => navigation.navigate('ProfileMainScreen')}
      />
      <Button title="Go to ProfileSettingScreen"
        onPress={() => navigation.navigate('ProfileSettingScreen')}
      />      
      <Button title="Go to ProfileAvatarModifScreen"
        onPress={() => navigation.navigate('ProfileAvatarModifScreen')}
      />

      <ScrollView contentContainerStyle={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>
          Profile preferences screen
        </Text>
      </ScrollView>

    </View>
  );
}