import React from 'react';
import { View, ScrollView } from 'react-native';
import { Text } from 'react-native-elements';

import HeaderWithSetting from './HeaderWithSetting';

export default function ProfileSettingScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>

      <HeaderWithSetting/>

      <ScrollView contentContainerStyle={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>
          Profile setting screen
        </Text>
      </ScrollView>

    </View>
  );
}