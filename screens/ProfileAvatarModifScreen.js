import React from 'react';
import { View, ScrollView, Button } from 'react-native';
import { Text } from 'react-native-elements';

import HeaderWithSetting from './HeaderWithSetting';

export default function ProfileAvatarMofidScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>

      <HeaderWithSetting/>

      <Button title="Go to ProfileMainScreen"
        onPress={() => navigation.navigate('ProfileMainScreen')}
      />
      <Button title="Go to ProfileSettingScreen"
        onPress={() => navigation.navigate('ProfileSettingScreen')}
      />
      <Button title="Go to ProfilePreferenceScreen"
        onPress={() => navigation.navigate('ProfilePreferenceScreen')}
      />

      <ScrollView contentContainerStyle={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>
          Profile avatar modification screen
        </Text>
      </ScrollView>

    </View>
  );
}